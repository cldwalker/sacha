(ns lt.plugins.sacha.codemirror
  "Fns that operate on a CodeMirror/editor object"
  (:require [lt.objs.editor :as editor]))


(defn fold-code
  "Like editor/fold-code but allows all args to .foldCode, doesn't assume current
  cursor and defaults :rangeFinder to fold.indent"
  ([ed pos force]
   (fold-code ed pos #js {:rangeFinder js/CodeMirror.fold.indent} force))
  ([ed pos opts force]
   (.foldCode (editor/->cm-ed ed) pos opts force)))

;; from https://groups.google.com/forum/#!searchin/codemirror/foldall/codemirror/u3IYL-5g0t4/4YGdXEBFgZoJ
(defn fold-all
  ([ed condition]
   (fold-all ed condition (range (editor/first-line ed) (inc (editor/last-line ed)))))
  ([ed condition lines]
   (editor/operation ed
                     (fn []
                       (doseq [line lines]
                         (when (condition (line-indent ed line))
                           (fold-code ed #js {:line line :ch 0} "fold")))))))

(defn unfold-all
  ([ed condition]
   (unfold-all ed condition (range (editor/first-line ed) (inc (editor/last-line ed)))))
  ([ed condition lines]
   (editor/operation ed
                     (fn []
                       (doseq [line lines]
                         (when (condition (line-indent ed line))
                           (fold-code ed #js {:line line :ch 0} "unfold")))))))


;; same as getIndent() embedded in fold.indent
(defn line-indent [ed line]
  (js/CodeMirror.countColumn
   (editor/line ed line) nil (editor/option ed "tabSize")))

(defn find-first-folded-line [ed lines]
  (->> lines
       (map #(hash-map :line %
                       :marks (.findMarksAt (editor/->cm-ed ed) #js {:line % :ch 0})))
       (drop-while #(-> % :marks js->clj empty?))
       ;; this check is not as thorough as isFolded() in fold.js
       (some (fn [m]
               (when (some #(.-__isFold %) (js->clj (:marks m)))
                 (:line m))))))

;; doesn't assume direction
(defn find-first-sibling [ed lines indent]
  (some #(when (= indent (line-indent ed %)) %)
        lines))

;; assumes upward direction
(defn find-parent [ed lines indent]
  (some #(when (> indent (line-indent ed %)) %)
        lines))

;; assumes downward direction
;; useful for finding current tree
(defn find-first-non-child [ed lines indent]
  (some #(when (>= indent (line-indent ed %)) %)
        lines))

(defn next-non-child-line [ed line]
  (find-first-non-child
   ed
   (range (inc line) (inc (editor/last-line ed)))
   (line-indent ed line)))

(defn safe-next-non-child-line
  "Ensure a line is returned i.e. return line past end-line if on last tree"
  [ed current-line]
  (or (next-non-child-line ed current-line)
      (inc (editor/last-line ed))))

(defn clear-selection [ed]
  (.setCursor (editor/->cm-ed ed) (editor/cursor ed "anchor")))

(defn delete-lines
  "Deletes multiple lines starting on from and including to."
  [ed from to]
  (.replaceRange (editor/->cm-ed ed)
                 "" #js {:line from :ch 0} #js {:line (inc to) :ch 0}))

(defn find-parent-line
  "Finds parent line for given line"
  [ed line]
  (find-parent ed (range (dec line) -1 -1) (line-indent ed line)))
