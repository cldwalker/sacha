(ns lt.plugins.sacha
  (:require [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]
            [lt.plugins.sacha.codemirror :as c]
            [lt.plugins.sacha.util :as util]))

;; Terminology
;; indent:  whitespace at beginning of each line
;; level:   outline level. Non-indented levels are level 1. Subsequent levels are
;;          one more tabSize indent than the previous line.
;; tree:    the whole outline
;; node:    one line in a tree
;; branch:  a node which has children

;; Basic Commands
;; ==============

(cmd/command {:command :sacha.toggle-fold
              :desc "sacha: toggle folding/unfolding the current branch"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (c/fold-code ed (editor/cursor ed) nil)))})

(cmd/command {:command :sacha.unindent-node
              :desc "sacha: unindent by one level"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        ;; would use editor/indent-line if it supported last arg
                        (.indentLine (editor/->cm-ed ed) (.-line (editor/cursor ed)) "subtract" true)))})

(defn select-branch []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (c/line-indent ed line)
        last-line (dec (c/safe-next-non-child-line ed line))]
    (editor/set-selection
     ed
     {:line line :ch 0}
     {:line last-line
      :ch (editor/line-length ed last-line)})))

;; handy for delete, yank, indent, replace
(cmd/command {:command :sacha.select-branch
              :desc "sacha: select current branch"
              :exec select-branch})

(defn indent-branch [direction]
  (let [ed (pool/last-active)]
    (select-branch)
    (editor/indent-selection ed direction)
    (c/clear-selection ed)))

(cmd/command {:command :sacha.indent-branch
              :desc "sacha: indent current branch"
              :exec (partial indent-branch "add")})

(cmd/command {:command :sacha.unindent-branch
              :desc "sacha: unindent current branch"
              :exec (partial indent-branch "subtract")})

;; Fold Commands
;; =============

(cmd/command {:command :sacha.fold-all
              :desc "sacha: fold the whole file"
              :exec (fn []
                      (c/fold-all (pool/last-active) (constantly true)))})


(cmd/command {:command :sacha.unfold-all
              :desc "sacha: unfold the whole file"
              :exec (fn []
                      (c/unfold-all (pool/last-active) (constantly true)))})

(cmd/command {:command :sacha.fold-to-level
              :desc "sacha: fold up to given level"
              :exec (fn [level]
                      (let [ed (pool/last-active)
                            tabsize (editor/option ed "tabSize")
                            indent (* (dec level) tabsize)]
                        (c/unfold-all ed #(< % indent))
                        (c/fold-all ed #(= % indent))))})

(defn unfold-branch-one-level []
  (let [ed (pool/last-active)
        current-line (.-line (editor/cursor ed))
        next-tree-line (c/safe-next-non-child-line ed current-line)
        first-folded-line (c/find-first-folded-line ed (range current-line next-tree-line))
        ;; line with fold seems to be one line below, hence dec
        next-indent (when first-folded-line (c/line-indent ed (dec first-folded-line)))]
    (when first-folded-line
      (c/unfold-all ed
                  #(<= % next-indent)
                  (range current-line next-tree-line)))))

(cmd/command {:command :sacha.unfold-branch-one-level
              :desc "sacha: unfold current branch one level"
              :exec unfold-branch-one-level})

(defn fold-branch-one-level []
  (let [ed (pool/last-active)
        current-line (.-line (editor/cursor ed))
        next-tree-line (c/safe-next-non-child-line ed current-line)
        first-folded-line (c/find-first-folded-line ed (range current-line next-tree-line))
        folded-indent (if first-folded-line
                       ;; line with fold seems to be one line below, hence dec
                       (c/line-indent ed (dec first-folded-line))
                       ;; Since there are no folds, find deepest indent
                       (apply max (map
                                   #(c/line-indent ed %)
                                   (range current-line next-tree-line))))
                    ;; fold back one indent
        next-indent (- folded-indent (editor/option ed "tabSize"))]
    (c/fold-all
     ed
     #(>= % next-indent)
     (range current-line next-tree-line))))

(cmd/command {:command :sacha.fold-branch-one-level
              :desc "sacha: fold current branch one level"
              :exec fold-branch-one-level})

(defn fold-fn-for-branch [fold-fn]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (c/line-indent ed line)]
    (fold-fn
     ed
     (constantly true)
     (range line (c/safe-next-non-child-line ed line)))))

(cmd/command {:command :sacha.fold-all-for-branch
              :desc "sacha: fold all for current branch"
              :exec (partial fold-fn-for-branch c/fold-all)})

(cmd/command {:command :sacha.unfold-all-for-branch
              :desc "sacha: unfold all for current branch"
              :exec (partial fold-fn-for-branch c/unfold-all)})

;; Misc Commands
;; =============

(defn jump-to-parent []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (c/line-indent ed line)]
    (if-let [parent-line (c/find-parent-line ed line)]
      ;; assume parent is one level less though this isn't true for disjointed outlines
      (editor/move-cursor ed {:line parent-line
                              :ch (- indent (editor/option ed "tabSize"))})
      (notifos/set-msg! "No parent found" {:class "error"}))))

(cmd/command {:command :sacha.jump-to-parent
              :desc "sacha: jump to parent"
              :exec jump-to-parent})

(defn jump-to-next-sibling []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (c/line-indent ed line)]
    (if-let [next-line (c/find-first-sibling
                        ed (range (inc line) (inc (editor/last-line ed))) indent)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line next-line :ch indent})
      (notifos/set-msg! "No next line found" {:class "error"}))))

(cmd/command {:command :sacha.jump-to-next-sibling
              :desc "sacha: jump to next sibling"
              :exec jump-to-next-sibling})

(defn jump-to-previous-sibling []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (c/line-indent ed line)]
    (if-let [prev-line (c/find-first-sibling
                        ed (range (dec line) -1 -1) indent)]
      ;; cursor off when lines are mixes of tabs and spaces
      (editor/move-cursor ed {:line prev-line :ch indent})
      (notifos/set-msg! "No previous line found" {:class "error"}))))

(cmd/command {:command :sacha.jump-to-previous-sibling
              :desc "sacha: jump to previous sibling"
              :exec jump-to-previous-sibling})

;; Limitation going :up - when moving a child node between trees, child node
;; will move up an extra line. This is fixable by fixing next-non-child-line and
;; next-node-in-new-tree?. Don't do this until it's worth the effort
;; Note: better abstractions are needed here. Current code is hard to reason about and
;; too entangled
(defn move-branch [direction]
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        indent (c/line-indent ed line)
        lines-to-search (if (= direction :down)
                          (range (inc line) (inc (editor/last-line ed)))
                          (range (dec line) -1 -1))
        sibling-line (c/find-first-sibling ed lines-to-search indent)]
    (if-not sibling-line
      (notifos/set-msg! (if (= direction :down)
                          "Next line not found" "Previous line not found")
                        {:class "error"})
      (editor/operation ed
                        (fn []
                          (let [current-line-ends (c/next-non-child-line ed line)
                                next-node-in-new-tree? (neg? (- (c/line-indent ed current-line-ends)
                                                                indent))
                                copied-lines (editor/range ed {:line line :ch 0} {:line current-line-ends :ch 0})
                                sibling-line-ends (c/next-non-child-line ed sibling-line)
                                ;; account for nil end line for sibling i.e. EOF
                                copied-lines (if sibling-line-ends copied-lines (str "\n" copied-lines))
                                sibling-line-ends (or sibling-line-ends
                                                      (inc (editor/last-line ed)))
                                cursor-line (if (= direction :down)
                                              (if next-node-in-new-tree? sibling-line sibling-line-ends)
                                              sibling-line)]
                            ;; must be at beginning of line to paste copied whitespace correctly
                            (editor/move-cursor ed {:line cursor-line :ch 0})
                            (c/delete-lines ed line (dec current-line-ends))
                            (editor/insert-at-cursor ed copied-lines)
                            (editor/move-cursor ed {:line (-> ed editor/cursor .-line
                                                              (- (- current-line-ends line)))
                                                    :ch indent})))))))

(cmd/command {:command :sacha.move-branch-below-next-sibling
              :desc "sacha: Move current branch below next sibling"
              :exec (partial move-branch :down)})


(cmd/command {:command :sacha.move-branch-above-previous-sibling
              :desc "sacha: Move current branch above previous sibling"
              :exec (partial move-branch :up)})


(defn find-disjointed-lines []
  (let [ed (pool/last-active)
        tabsize (editor/option ed "tabSize")]
    (->> (range (editor/first-line ed) (inc (editor/last-line ed)))
         (map #(hash-map :line % :indent (c/line-indent ed %)))
         (partition 2 1)
         (map (fn [[line1 line2]]
                {:lines [(:line line1) (:line line2)]
                 :difference (- (:indent line2) (:indent line1))}))
         (remove #(or (neg? (:difference %))
                      (#{0 tabsize} (:difference %)))))))


;; useful for detecting if converting a messy outline went well i.e. mix of tabs + spaces
(cmd/command {:command :sacha.find-malformed-lines
              :desc "sacha: find lines with malformed levels caused by incorrect indents"
              :exec (comp prn find-disjointed-lines)})

(defn zoom-branch []
  (let [ed (pool/last-active)
        line (.-line (editor/cursor ed))
        last-line (dec (c/safe-next-non-child-line ed line))]
    (util/open-linked-doc ed {:from line :to last-line})))

(cmd/command {:command :sacha.zoom-branch
              :desc "sacha: Zoom/hoist current branch into a separate tab"
              :exec zoom-branch})

(cmd/command {:command :sacha.raise-branch
              :desc "sacha: Raises branch to replace parent and sets it to parent's level"
              :exec (fn []
                      (let [ed (pool/last-active)
                            parent-line (c/find-parent-line ed (.-line (editor/cursor ed)))]
                        (editor/operation ed
                                          (fn []
                                            (c/delete-lines ed parent-line parent-line)
                                            (indent-branch "subtract")))))})
