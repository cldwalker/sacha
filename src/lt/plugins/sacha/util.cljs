(ns lt.plugins.sacha.util
  (:require [lt.objs.document :as doc]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [lt.objs.files :as files]
            [lt.objs.opener :as opener]
            [lt.objs.metrics :as metrics]
            [lt.object :as object]))

;; TODO: PR to make this available in LT
(defn open-path
  "Copy of opener/open-path modified to take existing doc and not create one with doc/open."
  [obj doc path]
  (files/open path
              (fn [data]
                (let [type (files/path->type path)
                      ed (pool/create (merge {:doc doc :line-ending (-> @doc :line-ending)} (lt.objs.opener/path->info path)))]
                  (metrics/capture! :editor.open {:type (or (:name type) (files/ext path))
                                                  :lines (editor/last-line ed)})
                  ;; don't want file-backed for zoomed view
                  ;; (object/add-tags ed [:editor.file-backed])
                  (object/raise obj :open ed)
                  (lt.objs.tabs/add! ed)
                  (lt.objs.tabs/active! ed)))))

;; TODO: PR to make this available in LT
(defn create-sub
  "Copy of document/create-sub with bug fix"
  ([doc] (create-sub doc nil))
  ([doc info]
   (let [neue (doc/create (merge (select-keys @doc doc/doc-keys) info {:doc (doc/linked* doc info)
                                                               :root doc}))]
     (object/add-tags neue [:document.linked])
     (object/update! doc [:sub-docs] conj neue))))

(defn open-linked-doc
  "Creates a linked doc from the given editor and linked doc (http://codemirror.net/doc/manual.html#linkedDoc)
  options and opens it in a new tab. Assumes a subview of the original doc is to be created."
  [ed ldoc-opts]
  (create-sub (:doc @ed) ldoc-opts)
  (open-path opener/opener
             (-> @ed :doc deref :sub-docs last)
             (let [path (get-in @ed [:info :path])]
               (str (files/without-ext path) "-zoom-"
                    (:from ldoc-opts)  "-to-" (:to ldoc-opts)
                    "." (files/ext path)))))

(comment
  (def path (get-in @ed [:info :path]))
  (def ed (first (pool/containing-path "sacha.cljs")))

  (create-sub (:doc @ed) {:from 1 :to 5})
  (def ldoc (-> @ed :doc deref :sub-docs last))

  (open-path opener/opener ldoc path)

  (open-linked-doc ed {:from 0 :to 15})

  ;; diagnostics
  (-> @ed :doc deref :sub-docs count)
  (lt.object/update! (:doc @ed) [:sub-docs] (constantly []))
  )
