(ns lt.plugins.sacha.util
  (:require [lt.objs.document :as doc]
            [lt.objs.editor.pool :as pool]
            [lt.object :as object]))

(defn create-sub
  "Copy of document/create-sub with bug fix"
  ([doc] (create-sub doc nil))
  ([doc info]
   (let [neue (doc/create (merge (select-keys @doc doc/doc-keys) info {:doc (doc/linked* doc #_(:doc doc) info)
                                                               :root doc}))]
     (object/add-tags neue [:document.linked])
     (object/update! doc [:sub-docs] conj neue))))

(defn update-editor-to-linked-doc!
  "Updates given editor to use a linked doc"
  [ed path doc]
  (let [info (merge {:mime "plaintext" :tags [:editor.plaintext]}
                    (lt.objs.opener/path->info path))
        content (:content (lt.objs.files/open-sync path))
        ;; TODO: remove hardcoded brittle defaults
        ;; These defaults may not work for others and for specific file types
        default-tags #{:editor.inline-result :tabset.tab :editor.keys.vim.normal
                       :editor.file-backed :object :editor.keys.vim :editor.keys.emacs :editor}
        default-editor-keys #{:info :lt.object/id :lt.object/type :lt.objs.tabs/tabset :doc :tags
                              :editor.generation :content :triggers :ed :children
                              :listeners :behaviors :lt.objs.editor.pool/comment-options}
        outdated-editor-keys (clojure.set/difference (set (keys @ed)) default-editor-keys)]
    (lt.objs.document/register-doc doc path)
    (lt.objs.editor/set-doc! ed doc)
    ;; these should update listeners
    (lt.object/remove-tags ed (clojure.set/difference (:tags @ed) default-tags))
    (lt.object/add-tags ed (into default-tags (:tags info [])))
    (lt.object/merge! ed {:info info})
    (swap! ed #(apply dissoc % outdated-editor-keys))
    (when-let [ts (:lt.objs.tabs/tabset @ed)]
      (lt.object/raise ts :tab.updated))))

(comment
  (def path (get-in @ed [:info :path]))
  (def ed (first (pool/containing-path "whoop")))

  (create-sub (:doc @ed) {:from 1 :to 5})
  (def ldoc (-> @ed :doc deref :sub-docs last))
  (def ed2 (first (pool/containing-path "codemirror.cljs")))
  (update-editor-to-linked-doc! ed2 path ldoc)

  ;; diagnostics
  (-> @ed :doc deref :sub-docs count)
  (lt.object/update! (:doc @ed) [:sub-docs] (constantly []))
  )
