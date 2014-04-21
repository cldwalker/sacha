if(!lt.util.load.provided_QMARK_('lt.plugins.sacha.codemirror')) {
goog.provide('lt.plugins.sacha.codemirror');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
/**
* Like editor/fold-code but handles all args to .foldCode and doesn't assume current cursor
*/
lt.plugins.sacha.codemirror.fold_code = (function fold_code(ed,pos,opts,force){return lt.objs.editor.__GT_cm_ed.call(null,ed).foldCode(pos,opts,force);
});
lt.plugins.sacha.codemirror.fold_all = (function() {
var fold_all = null;
var fold_all__2 = (function (ed,condition){return fold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var fold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__9504 = cljs.core.seq.call(null,lines);var chunk__9505 = null;var count__9506 = 0;var i__9507 = 0;while(true){
if((i__9507 < count__9506))
{var line = cljs.core._nth.call(null,chunk__9505,i__9507);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__9522 = seq__9504;
var G__9523 = chunk__9505;
var G__9524 = count__9506;
var G__9525 = (i__9507 + 1);
seq__9504 = G__9522;
chunk__9505 = G__9523;
count__9506 = G__9524;
i__9507 = G__9525;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9504);if(temp__4092__auto__)
{var seq__9504__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9504__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__9504__$1);{
var G__9526 = cljs.core.chunk_rest.call(null,seq__9504__$1);
var G__9527 = c__7561__auto__;
var G__9528 = cljs.core.count.call(null,c__7561__auto__);
var G__9529 = 0;
seq__9504 = G__9526;
chunk__9505 = G__9527;
count__9506 = G__9528;
i__9507 = G__9529;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__9504__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__9530 = cljs.core.next.call(null,seq__9504__$1);
var G__9531 = null;
var G__9532 = 0;
var G__9533 = 0;
seq__9504 = G__9530;
chunk__9505 = G__9531;
count__9506 = G__9532;
i__9507 = G__9533;
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
var unfold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__9512 = cljs.core.seq.call(null,lines);var chunk__9513 = null;var count__9514 = 0;var i__9515 = 0;while(true){
if((i__9515 < count__9514))
{var line = cljs.core._nth.call(null,chunk__9513,i__9515);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__9534 = seq__9512;
var G__9535 = chunk__9513;
var G__9536 = count__9514;
var G__9537 = (i__9515 + 1);
seq__9512 = G__9534;
chunk__9513 = G__9535;
count__9514 = G__9536;
i__9515 = G__9537;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9512);if(temp__4092__auto__)
{var seq__9512__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9512__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__9512__$1);{
var G__9538 = cljs.core.chunk_rest.call(null,seq__9512__$1);
var G__9539 = c__7561__auto__;
var G__9540 = cljs.core.count.call(null,c__7561__auto__);
var G__9541 = 0;
seq__9512 = G__9538;
chunk__9513 = G__9539;
count__9514 = G__9540;
i__9515 = G__9541;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__9512__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.codemirror.line_indent.call(null,ed,line))))
{lt.plugins.sacha.codemirror.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__9542 = cljs.core.next.call(null,seq__9512__$1);
var G__9543 = null;
var G__9544 = 0;
var G__9545 = 0;
seq__9512 = G__9542;
chunk__9513 = G__9543;
count__9514 = G__9544;
i__9515 = G__9545;
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
lt.plugins.sacha.codemirror.find_first_folded_line = (function find_first_folded_line(ed,lines){return cljs.core.some.call(null,(function (m){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__9518_SHARP_){return p1__9518_SHARP_.__isFold;
}),cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(m)))))
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(m);
} else
{return null;
}
}),cljs.core.drop_while.call(null,(function (p1__9517_SHARP_){return cljs.core.empty_QMARK_.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(p1__9517_SHARP_)));
}),cljs.core.map.call(null,(function (p1__9516_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"marks","marks",1117570744)],[p1__9516_SHARP_,lt.objs.editor.__GT_cm_ed.call(null,ed).findMarksAt({"ch": 0, "line": p1__9516_SHARP_})]);
}),lines)));
});
lt.plugins.sacha.codemirror.find_first_sibling = (function find_first_sibling(ed,lines,indent){return cljs.core.some.call(null,(function (p1__9519_SHARP_){if(cljs.core._EQ_.call(null,indent,lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__9519_SHARP_)))
{return p1__9519_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.codemirror.find_parent = (function find_parent(ed,lines,indent){return cljs.core.some.call(null,(function (p1__9520_SHARP_){if((indent > lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__9520_SHARP_)))
{return p1__9520_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.codemirror.find_first_non_child = (function find_first_non_child(ed,lines,indent){return cljs.core.some.call(null,(function (p1__9521_SHARP_){if((indent >= lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__9521_SHARP_)))
{return p1__9521_SHARP_;
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
lt.plugins.sacha.codemirror.safe_next_non_child_line = (function safe_next_non_child_line(ed,current_line){var or__6813__auto__ = lt.plugins.sacha.codemirror.next_non_child_line.call(null,ed,current_line);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.toggle-fold","sacha.toggle-fold",4484191212),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: toggle folding/unfolding the current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.sacha.codemirror.fold_code.call(null,ed,lt.objs.editor.cursor.call(null,ed),{"rangeFinder": CodeMirror.fold.indent},null);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unindent-node","sacha.unindent-node",1440905052),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unindent by one level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.indent_line.call(null,ed,lt.objs.editor.cursor.call(null,ed).line,"subtract");
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-to-level","sacha.fold-to-level",2456167184),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold up to given level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (level){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");var indent = ((level - 1) * tabsize);lt.plugins.sacha.codemirror.unfold_all.call(null,ed,(function (p1__9658_SHARP_){return (p1__9658_SHARP_ < indent);
}));
return lt.plugins.sacha.codemirror.fold_all.call(null,ed,(function (p1__9659_SHARP_){return cljs.core._EQ_.call(null,p1__9659_SHARP_,indent);
}));
})], null));
lt.plugins.sacha.unfold_branch_one_level = (function unfold_branch_one_level(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.codemirror.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.codemirror.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var next_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.codemirror.line_indent.call(null,ed,(first_folded_line - 1)):null);if(cljs.core.truth_(first_folded_line))
{return lt.plugins.sacha.codemirror.unfold_all.call(null,ed,(function (p1__9660_SHARP_){return (p1__9660_SHARP_ <= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-branch-one-level","sacha.unfold-branch-one-level",759984983),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold current branch one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.unfold_branch_one_level], null));
lt.plugins.sacha.fold_branch_one_level = (function fold_branch_one_level(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.codemirror.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.codemirror.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var folded_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.codemirror.line_indent.call(null,ed,(first_folded_line - 1)):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (ed,current_line,next_tree_line,first_folded_line){
return (function (p1__9661_SHARP_){return lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__9661_SHARP_);
});})(ed,current_line,next_tree_line,first_folded_line))
,cljs.core.range.call(null,current_line,next_tree_line))));var next_indent = (folded_indent - lt.objs.editor.option.call(null,ed,"tabSize"));return lt.plugins.sacha.codemirror.fold_all.call(null,ed,(function (p1__9662_SHARP_){return (p1__9662_SHARP_ >= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
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
{return lt.objs.editor.operation.call(null,ed,(function (){var current_line_ends = lt.plugins.sacha.codemirror.next_non_child_line.call(null,ed,line);var next_node_in_new_tree_QMARK_ = ((lt.plugins.sacha.codemirror.line_indent.call(null,ed,current_line_ends) - indent) < 0);var copied_lines = lt.objs.editor.range.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),current_line_ends,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));var sibling_line_ends = lt.plugins.sacha.codemirror.next_non_child_line.call(null,ed,sibling_line);var copied_lines__$1 = (cljs.core.truth_(sibling_line_ends)?copied_lines:[cljs.core.str("\n"),cljs.core.str(copied_lines)].join(''));var sibling_line_ends__$1 = (function (){var or__6813__auto__ = sibling_line_ends;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
})();var cursor_line = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?((next_node_in_new_tree_QMARK_)?sibling_line:sibling_line_ends__$1):sibling_line);lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cursor_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
lt.plugins.sacha.codemirror.delete_lines.call(null,ed,line,(current_line_ends - 1));
lt.objs.editor.insert_at_cursor.call(null,ed,copied_lines__$1);
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(lt.objs.editor.cursor.call(null,ed).line - (current_line_ends - line)),new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
}));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-branch-below-next-sibling","sacha.move-branch-below-next-sibling",661278437),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current branch below next sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_branch,new cljs.core.Keyword(null,"down","down",1016993812))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-branch-above-previous-sibling","sacha.move-branch-above-previous-sibling",3178376061),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current branch above previous sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_branch,new cljs.core.Keyword(null,"up","up",1013907981))], null));
lt.plugins.sacha.find_disjointed_lines = (function find_disjointed_lines(){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");return cljs.core.remove.call(null,(function (p1__9664_SHARP_){var or__6813__auto__ = (new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__9664_SHARP_) < 0);if(or__6813__auto__)
{return or__6813__auto__;
} else
{return cljs.core.PersistentHashSet.fromArray([0,tabsize], true).call(null,new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__9664_SHARP_));
}
}),cljs.core.map.call(null,(function (p__9667){var vec__9668 = p__9667;var line1 = cljs.core.nth.call(null,vec__9668,0,null);var line2 = cljs.core.nth.call(null,vec__9668,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",1116881521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line1),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line2)], null),new cljs.core.Keyword(null,"difference","difference",2742266031),(new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line2) - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line1))], null);
}),cljs.core.partition.call(null,2,1,cljs.core.map.call(null,(function (p1__9663_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"indent","indent",4124632094)],[p1__9663_SHARP_,lt.plugins.sacha.codemirror.line_indent.call(null,ed,p1__9663_SHARP_)]);
}),cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1))))));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.find-malformed-lines","sacha.find-malformed-lines",982046763),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: find lines with malformed levels caused by incorrect indents",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.comp.call(null,cljs.core.prn,lt.plugins.sacha.find_disjointed_lines)], null));
}

//# sourceMappingURL=sacha_compiled.js.map