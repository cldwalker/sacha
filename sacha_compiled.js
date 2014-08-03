if(!lt.util.load.provided_QMARK_('lt.plugins.sacha.codemirror')) {
goog.provide('lt.plugins.sacha.codemirror');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
/**
* Like editor/fold-code but allows all args to .foldCode, doesn't assume current
* cursor and defaults :rangeFinder to fold.indent
*/
lt.plugins.sacha.codemirror.fold_code = (function() {
var fold_code = null;
var fold_code__3 = (function (ed,pos,force){return fold_code.call(null,ed,pos,{"rangeFinder": CodeMirror.fold.indent},force);
});
var fold_code__4 = (function (ed,pos,opts,force){return lt.objs.editor.__GT_cm_ed.call(null,ed).foldCode(pos,opts,force);
});
fold_code = function(ed,pos,opts,force){
switch(arguments.length){
case 3:
return fold_code__3.call(this,ed,pos,opts);
case 4:
return fold_code__4.call(this,ed,pos,opts,force);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fold_code.cljs$core$IFn$_invoke$arity$3 = fold_code__3;
fold_code.cljs$core$IFn$_invoke$arity$4 = fold_code__4;
return fold_code;
})()
;
lt.plugins.sacha.codemirror.fold_all = (function() {
var fold_all = null;
var fold_all__2 = (function (ed,condition){return fold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var fold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__7838 = cljs.core.seq.call(null,lines);var chunk__7839 = null;var count__7840 = 0;var i__7841 = 0;while(true){
if((i__7841 < count__7840))
{var line = cljs.core._nth.call(null,chunk__7839,i__7841);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},"fold");
} else
{}
{
var G__7856 = seq__7838;
var G__7857 = chunk__7839;
var G__7858 = count__7840;
var G__7859 = (i__7841 + 1);
seq__7838 = G__7856;
chunk__7839 = G__7857;
count__7840 = G__7858;
i__7841 = G__7859;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7838);if(temp__4092__auto__)
{var seq__7838__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7838__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7838__$1);{
var G__7860 = cljs.core.chunk_rest.call(null,seq__7838__$1);
var G__7861 = c__7112__auto__;
var G__7862 = cljs.core.count.call(null,c__7112__auto__);
var G__7863 = 0;
seq__7838 = G__7860;
chunk__7839 = G__7861;
count__7840 = G__7862;
i__7841 = G__7863;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__7838__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},"fold");
} else
{}
{
var G__7864 = cljs.core.next.call(null,seq__7838__$1);
var G__7865 = null;
var G__7866 = 0;
var G__7867 = 0;
seq__7838 = G__7864;
chunk__7839 = G__7865;
count__7840 = G__7866;
i__7841 = G__7867;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
fold_all = function(ed,condition,lines){
switch(arguments.length){
case 2:
return fold_all__2.call(this,ed,condition);
case 3:
return fold_all__3.call(this,ed,condition,lines);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fold_all.cljs$core$IFn$_invoke$arity$2 = fold_all__2;
fold_all.cljs$core$IFn$_invoke$arity$3 = fold_all__3;
return fold_all;
})()
;
lt.plugins.sacha.codemirror.unfold_all = (function() {
var unfold_all = null;
var unfold_all__2 = (function (ed,condition){return unfold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var unfold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__7846 = cljs.core.seq.call(null,lines);var chunk__7847 = null;var count__7848 = 0;var i__7849 = 0;while(true){
if((i__7849 < count__7848))
{var line = cljs.core._nth.call(null,chunk__7847,i__7849);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},"unfold");
} else
{}
{
var G__7868 = seq__7846;
var G__7869 = chunk__7847;
var G__7870 = count__7848;
var G__7871 = (i__7849 + 1);
seq__7846 = G__7868;
chunk__7847 = G__7869;
count__7848 = G__7870;
i__7849 = G__7871;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7846);if(temp__4092__auto__)
{var seq__7846__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7846__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__7846__$1);{
var G__7872 = cljs.core.chunk_rest.call(null,seq__7846__$1);
var G__7873 = c__7112__auto__;
var G__7874 = cljs.core.count.call(null,c__7112__auto__);
var G__7875 = 0;
seq__7846 = G__7872;
chunk__7847 = G__7873;
count__7848 = G__7874;
i__7849 = G__7875;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__7846__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},"unfold");
} else
{}
{
var G__7876 = cljs.core.next.call(null,seq__7846__$1);
var G__7877 = null;
var G__7878 = 0;
var G__7879 = 0;
seq__7846 = G__7876;
chunk__7847 = G__7877;
count__7848 = G__7878;
i__7849 = G__7879;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
unfold_all = function(ed,condition,lines){
switch(arguments.length){
case 2:
return unfold_all__2.call(this,ed,condition);
case 3:
return unfold_all__3.call(this,ed,condition,lines);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unfold_all.cljs$core$IFn$_invoke$arity$2 = unfold_all__2;
unfold_all.cljs$core$IFn$_invoke$arity$3 = unfold_all__3;
return unfold_all;
})()
;
lt.plugins.sacha.codemirror.line_indent = (function line_indent(ed,line){return CodeMirror.countColumn(lt.objs.editor.line.call(null,ed,line),null,lt.objs.editor.option.call(null,ed,"tabSize"));
});
lt.plugins.sacha.codemirror.find_first_folded_line = (function find_first_folded_line(ed,lines){return cljs.core.some.call(null,(function (m){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7852_SHARP_){return p1__7852_SHARP_.__isFold;
}),cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(m)))))
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(m);
} else
{return null;
}
}),cljs.core.drop_while.call(null,(function (p1__7851_SHARP_){return cljs.core.empty_QMARK_.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(p1__7851_SHARP_)));
}),cljs.core.map.call(null,(function (p1__7850_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"marks","marks",1117570744)],[p1__7850_SHARP_,lt.objs.editor.__GT_cm_ed.call(null,ed).findMarksAt({"ch": 0, "line": p1__7850_SHARP_})]);
}),lines)));
});
lt.plugins.sacha.codemirror.find_first_sibling = (function find_first_sibling(ed,lines,indent){return cljs.core.some.call(null,(function (p1__7853_SHARP_){if(cljs.core._EQ_.call(null,indent,lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__7853_SHARP_)))
{return p1__7853_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.codemirror.find_parent = (function find_parent(ed,lines,indent){return cljs.core.some.call(null,(function (p1__7854_SHARP_){if((indent > lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__7854_SHARP_)))
{return p1__7854_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.codemirror.find_first_non_child = (function find_first_non_child(ed,lines,indent){return cljs.core.some.call(null,(function (p1__7855_SHARP_){if((indent >= lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__7855_SHARP_)))
{return p1__7855_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.codemirror.next_non_child_line = (function next_non_child_line(ed,line){return lt.plugins.sacha.codemirror.find_first_non_child.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),lt.plugins.sacha.codemirror.line_indent.call(null,ed,line));
});
/**
* Ensure a line is returned i.e. return line past end-line if on last tree
*/
lt.plugins.sacha.codemirror.safe_next_non_child_line = (function safe_next_non_child_line(ed,current_line){var or__6364__auto__ = lt.plugins.sacha.codemirror.next_non_child_line.call(null,ed,current_line);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
});
lt.plugins.sacha.codemirror.clear_selection = (function clear_selection(ed){return lt.objs.editor.__GT_cm_ed.call(null,ed).setCursor(lt.objs.editor.cursor.call(null,ed,"anchor"));
});
/**
* Deletes multiple lines starting on from and including to.
*/
lt.plugins.sacha.codemirror.delete_lines = (function delete_lines(ed,from,to){return lt.objs.editor.__GT_cm_ed.call(null,ed).replaceRange("",{"ch": 0, "line": from},{"ch": 0, "line": (to + 1)});
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.sacha')) {
goog.provide('lt.plugins.sacha');
goog.require('cljs.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.plugins.sacha.codemirror');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.plugins.sacha.codemirror');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.toggle-fold","sacha.toggle-fold",4484191212),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: toggle folding/unfolding the current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.sacha.codemirror.fold_code.call(null,ed,lt.objs.editor.cursor.call(null,ed),null);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unindent-node","sacha.unindent-node",1440905052),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unindent by one level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.__GT_cm_ed.call(null,ed).indentLine(lt.objs.editor.cursor.call(null,ed).line,"subtract",true);
})], null));
lt.plugins.sacha.select_branch = (function select_branch(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.codemirror.line_indent.call(null,ed,line);var last_line = (lt.plugins.sacha.codemirror.safe_next_non_child_line.call(null,ed,line) - 1);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,last_line)], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.select-branch","sacha.select-branch",1413352613),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: select current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.select_branch], null));
lt.plugins.sacha.indent_branch = (function indent_branch(direction){var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.select_branch.call(null);
lt.objs.editor.indent_selection.call(null,ed,direction);
return lt.plugins.sacha.codemirror.clear_selection.call(null,ed);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.indent-branch","sacha.indent-branch",4297706229),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: indent current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.indent_branch,"add")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unindent-branch","sacha.unindent-branch",2998932732),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unindent current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.indent_branch,"subtract")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-all","sacha.fold-all",3470749607),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold the whole file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sacha.codemirror.fold_all.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.constantly.call(null,true));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-all","sacha.unfold-all",4075208000),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold the whole file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sacha.codemirror.unfold_all.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.constantly.call(null,true));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-to-level","sacha.fold-to-level",2456167184),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold up to given level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (level){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");var indent = ((level - 1) * tabsize);lt.plugins.sacha.codemirror.unfold_all.call(null,ed,((function (ed,tabsize,indent){
return (function (p1__7976_SHARP_){return (p1__7976_SHARP_ < indent);
});})(ed,tabsize,indent))
);
return lt.plugins.sacha.codemirror.fold_all.call(null,ed,((function (ed,tabsize,indent){
return (function (p1__7977_SHARP_){return cljs.core._EQ_.call(null,p1__7977_SHARP_,indent);
});})(ed,tabsize,indent))
);
})], null));
lt.plugins.sacha.unfold_branch_one_level = (function unfold_branch_one_level(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.codemirror.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.codemirror.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var next_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.codemirror.line_indent.call(null,ed,(first_folded_line - 1)):null);if(cljs.core.truth_(first_folded_line))
{return lt.plugins.sacha.codemirror.unfold_all.call(null,ed,((function (ed,current_line,next_tree_line,first_folded_line,next_indent){
return (function (p1__7978_SHARP_){return (p1__7978_SHARP_ <= next_indent);
});})(ed,current_line,next_tree_line,first_folded_line,next_indent))
,cljs.core.range.call(null,current_line,next_tree_line));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-branch-one-level","sacha.unfold-branch-one-level",759984983),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold current branch one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.unfold_branch_one_level], null));
lt.plugins.sacha.fold_branch_one_level = (function fold_branch_one_level(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.codemirror.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.codemirror.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var folded_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.codemirror.line_indent.call(null,ed,(first_folded_line - 1)):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (ed,current_line,next_tree_line,first_folded_line){
return (function (p1__7979_SHARP_){return lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__7979_SHARP_);
});})(ed,current_line,next_tree_line,first_folded_line))
,cljs.core.range.call(null,current_line,next_tree_line))));var next_indent = (folded_indent - lt.objs.editor.option.call(null,ed,"tabSize"));return lt.plugins.sacha.codemirror.fold_all.call(null,ed,((function (ed,current_line,next_tree_line,first_folded_line,folded_indent,next_indent){
return (function (p1__7980_SHARP_){return (p1__7980_SHARP_ >= next_indent);
});})(ed,current_line,next_tree_line,first_folded_line,folded_indent,next_indent))
,cljs.core.range.call(null,current_line,next_tree_line));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-branch-one-level","sacha.fold-branch-one-level",2596347984),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold current branch one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.fold_branch_one_level], null));
lt.plugins.sacha.fold_fn_for_branch = (function fold_fn_for_branch(fold_fn){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.codemirror.line_indent.call(null,ed,line);return fold_fn.call(null,ed,cljs.core.constantly.call(null,true),cljs.core.range.call(null,line,lt.plugins.sacha.codemirror.safe_next_non_child_line.call(null,ed,line)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-all-for-branch","sacha.fold-all-for-branch",1869635376),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold all for current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.fold_fn_for_branch,lt.plugins.sacha.codemirror.fold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-all-for-branch","sacha.unfold-all-for-branch",1492305911),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold all for current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.fold_fn_for_branch,lt.plugins.sacha.codemirror.unfold_all)], null));
lt.plugins.sacha.jump_to_parent = (function jump_to_parent(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.codemirror.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.codemirror.find_parent.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var parent_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),parent_line,new cljs.core.Keyword(null,"ch","ch",1013907415),(indent - lt.objs.editor.option.call(null,ed,"tabSize"))], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No parent found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-parent","sacha.jump-to-parent",3437903663),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to parent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_parent], null));
lt.plugins.sacha.jump_to_next_sibling = (function jump_to_next_sibling(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.codemirror.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.codemirror.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),indent);if(cljs.core.truth_(temp__4090__auto__))
{var next_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),next_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No next line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-next-sibling","sacha.jump-to-next-sibling",2543603245),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to next sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_next_sibling], null));
lt.plugins.sacha.jump_to_previous_sibling = (function jump_to_previous_sibling(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.codemirror.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.codemirror.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var prev_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),prev_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No previous line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-previous-sibling","sacha.jump-to-previous-sibling",3800537265),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to previous sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_previous_sibling], null));
lt.plugins.sacha.move_branch = (function move_branch(direction){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.codemirror.line_indent.call(null,ed,line);var lines_to_search = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)):cljs.core.range.call(null,(line - 1),-1,-1));var sibling_line = lt.plugins.sacha.codemirror.find_first_sibling.call(null,ed,lines_to_search,indent);if(cljs.core.not.call(null,sibling_line))
{return lt.objs.notifos.set_msg_BANG_.call(null,((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?"Next line not found":"Previous line not found"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.editor.operation.call(null,ed,((function (ed,line,indent,lines_to_search,sibling_line){
return (function (){var current_line_ends = lt.plugins.sacha.codemirror.next_non_child_line.call(null,ed,line);var next_node_in_new_tree_QMARK_ = ((lt.plugins.sacha.codemirror.line_indent.call(null,ed,current_line_ends) - indent) < 0);var copied_lines = lt.objs.editor.range.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),current_line_ends,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));var sibling_line_ends = lt.plugins.sacha.codemirror.next_non_child_line.call(null,ed,sibling_line);var copied_lines__$1 = (cljs.core.truth_(sibling_line_ends)?copied_lines:[cljs.core.str("\n"),cljs.core.str(copied_lines)].join(''));var sibling_line_ends__$1 = (function (){var or__6364__auto__ = sibling_line_ends;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
})();var cursor_line = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?((next_node_in_new_tree_QMARK_)?sibling_line:sibling_line_ends__$1):sibling_line);lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cursor_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
lt.plugins.sacha.codemirror.delete_lines.call(null,ed,line,(current_line_ends - 1));
lt.objs.editor.insert_at_cursor.call(null,ed,copied_lines__$1);
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(lt.objs.editor.cursor.call(null,ed).line - (current_line_ends - line)),new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
});})(ed,line,indent,lines_to_search,sibling_line))
);
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-branch-below-next-sibling","sacha.move-branch-below-next-sibling",661278437),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current branch below next sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_branch,new cljs.core.Keyword(null,"down","down",1016993812))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-branch-above-previous-sibling","sacha.move-branch-above-previous-sibling",3178376061),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current branch above previous sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_branch,new cljs.core.Keyword(null,"up","up",1013907981))], null));
lt.plugins.sacha.find_disjointed_lines = (function find_disjointed_lines(){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");return cljs.core.remove.call(null,((function (ed,tabsize){
return (function (p1__7982_SHARP_){var or__6364__auto__ = (new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__7982_SHARP_) < 0);if(or__6364__auto__)
{return or__6364__auto__;
} else
{return cljs.core.PersistentHashSet.fromArray([0,tabsize], true).call(null,new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__7982_SHARP_));
}
});})(ed,tabsize))
,cljs.core.map.call(null,((function (ed,tabsize){
return (function (p__7985){var vec__7986 = p__7985;var line1 = cljs.core.nth.call(null,vec__7986,0,null);var line2 = cljs.core.nth.call(null,vec__7986,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",1116881521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line1),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line2)], null),new cljs.core.Keyword(null,"difference","difference",2742266031),(new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line2) - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line1))], null);
});})(ed,tabsize))
,cljs.core.partition.call(null,2,1,cljs.core.map.call(null,((function (ed,tabsize){
return (function (p1__7981_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"indent","indent",4124632094)],[p1__7981_SHARP_,lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__7981_SHARP_)]);
});})(ed,tabsize))
,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1))))));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.find-malformed-lines","sacha.find-malformed-lines",982046763),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: find lines with malformed levels caused by incorrect indents",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.comp.call(null,cljs.core.prn,lt.plugins.sacha.find_disjointed_lines)], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.sacha.util')) {
goog.provide('lt.plugins.sacha.util');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.metrics');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.objs.opener');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('lt.objs.metrics');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
/**
* Copy of opener/open-path modified to take existing doc and not create one with doc/open.
*/
lt.plugins.sacha.util.open_path = (function open_path(obj,doc,path){return lt.objs.files.open.call(null,path,(function (data){var type = lt.objs.files.path__GT_type.call(null,path);var ed = lt.objs.editor.pool.create.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1014003882),doc,new cljs.core.Keyword(null,"line-ending","line-ending",4015468690),new cljs.core.Keyword(null,"line-ending","line-ending",4015468690).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,doc))], null),lt.objs.opener.path__GT_info.call(null,path)));lt.objs.metrics.capture_BANG_.call(null,new cljs.core.Keyword(null,"editor.open","editor.open",4270591389),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),(function (){var or__6364__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(type);if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return lt.objs.files.ext.call(null,path);
}
})(),new cljs.core.Keyword(null,"lines","lines",1116881521),lt.objs.editor.last_line.call(null,ed)], null));
lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"open","open",1017321916),ed);
lt.objs.tabs.add_BANG_.call(null,ed);
return lt.objs.tabs.active_BANG_.call(null,ed);
}));
});
/**
* Copy of document/create-sub with bug fix
*/
lt.plugins.sacha.util.create_sub = (function() {
var create_sub = null;
var create_sub__1 = (function (doc){return create_sub.call(null,doc,null);
});
var create_sub__2 = (function (doc,info){var neue = lt.objs.document.create.call(null,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,doc),lt.objs.document.doc_keys),info,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1014003882),lt.objs.document.linked_STAR_.call(null,doc,info),new cljs.core.Keyword(null,"root","root",1017410644),doc], null)));lt.object.add_tags.call(null,neue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"document.linked","document.linked",3550087614)], null));
return lt.object.update_BANG_.call(null,doc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub-docs","sub-docs",3182649626)], null),cljs.core.conj,neue);
});
create_sub = function(doc,info){
switch(arguments.length){
case 1:
return create_sub__1.call(this,doc);
case 2:
return create_sub__2.call(this,doc,info);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sub.cljs$core$IFn$_invoke$arity$1 = create_sub__1;
create_sub.cljs$core$IFn$_invoke$arity$2 = create_sub__2;
return create_sub;
})()
;
/**
* Creates a linked doc from the given editor and linked doc (http://codemirror.net/doc/manual.html#linkedDoc)
* options and opens it in a new tab. Assumes a subview of the original doc is to be created.
*/
lt.plugins.sacha.util.open_linked_doc = (function open_linked_doc(ed,ldoc_opts){lt.plugins.sacha.util.create_sub.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed)),ldoc_opts);
return lt.plugins.sacha.util.open_path.call(null,lt.objs.opener.opener,cljs.core.last.call(null,new cljs.core.Keyword(null,"sub-docs","sub-docs",3182649626).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1014003882).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ed))))),(function (){var path = cljs.core.get_in.call(null,cljs.core.deref.call(null,ed),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"path","path",1017337751)], null));return [cljs.core.str(lt.objs.files.without_ext.call(null,path)),cljs.core.str("-zoom-"),cljs.core.str(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(ldoc_opts)),cljs.core.str("-to-"),cljs.core.str(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(ldoc_opts)),cljs.core.str("."),cljs.core.str(lt.objs.files.ext.call(null,path))].join('');
})());
});
}

//# sourceMappingURL=sacha_compiled.js.map