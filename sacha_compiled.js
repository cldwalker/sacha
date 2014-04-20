if(!lt.util.load.provided_QMARK_('lt.plugins.sacha')) {
goog.provide('lt.plugins.sacha');
goog.require('cljs.core');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
/**
* Like editor/fold-code but handles all args to .foldCode and doesn't assume current cursor
*/
lt.plugins.sacha.fold_code = (function fold_code(ed,pos,opts,force){return lt.objs.editor.__GT_cm_ed.call(null,ed).foldCode(pos,opts,force);
});
lt.plugins.sacha.fold_all = (function() {
var fold_all = null;
var fold_all__2 = (function (ed,condition){return fold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var fold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__8371 = cljs.core.seq.call(null,lines);var chunk__8372 = null;var count__8373 = 0;var i__8374 = 0;while(true){
if((i__8374 < count__8373))
{var line = cljs.core._nth.call(null,chunk__8372,i__8374);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__8404 = seq__8371;
var G__8405 = chunk__8372;
var G__8406 = count__8373;
var G__8407 = (i__8374 + 1);
seq__8371 = G__8404;
chunk__8372 = G__8405;
count__8373 = G__8406;
i__8374 = G__8407;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8371);if(temp__4092__auto__)
{var seq__8371__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8371__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8371__$1);{
var G__8408 = cljs.core.chunk_rest.call(null,seq__8371__$1);
var G__8409 = c__7561__auto__;
var G__8410 = cljs.core.count.call(null,c__7561__auto__);
var G__8411 = 0;
seq__8371 = G__8408;
chunk__8372 = G__8409;
count__8373 = G__8410;
i__8374 = G__8411;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__8371__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__8412 = cljs.core.next.call(null,seq__8371__$1);
var G__8413 = null;
var G__8414 = 0;
var G__8415 = 0;
seq__8371 = G__8412;
chunk__8372 = G__8413;
count__8373 = G__8414;
i__8374 = G__8415;
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
lt.plugins.sacha.unfold_all = (function() {
var unfold_all = null;
var unfold_all__2 = (function (ed,condition){return unfold_all.call(null,ed,condition,cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1)));
});
var unfold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__8379 = cljs.core.seq.call(null,lines);var chunk__8380 = null;var count__8381 = 0;var i__8382 = 0;while(true){
if((i__8382 < count__8381))
{var line = cljs.core._nth.call(null,chunk__8380,i__8382);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__8416 = seq__8379;
var G__8417 = chunk__8380;
var G__8418 = count__8381;
var G__8419 = (i__8382 + 1);
seq__8379 = G__8416;
chunk__8380 = G__8417;
count__8381 = G__8418;
i__8382 = G__8419;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8379);if(temp__4092__auto__)
{var seq__8379__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8379__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8379__$1);{
var G__8420 = cljs.core.chunk_rest.call(null,seq__8379__$1);
var G__8421 = c__7561__auto__;
var G__8422 = cljs.core.count.call(null,c__7561__auto__);
var G__8423 = 0;
seq__8379 = G__8420;
chunk__8380 = G__8421;
count__8381 = G__8422;
i__8382 = G__8423;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__8379__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__8424 = cljs.core.next.call(null,seq__8379__$1);
var G__8425 = null;
var G__8426 = 0;
var G__8427 = 0;
seq__8379 = G__8424;
chunk__8380 = G__8425;
count__8381 = G__8426;
i__8382 = G__8427;
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
lt.plugins.sacha.line_indent = (function line_indent(ed,line){return CodeMirror.countColumn(lt.objs.editor.line.call(null,ed,line),null,lt.objs.editor.option.call(null,ed,"tabSize"));
});
lt.plugins.sacha.find_first_folded_line = (function find_first_folded_line(ed,lines){return cljs.core.some.call(null,(function (m){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8385_SHARP_){return p1__8385_SHARP_.__isFold;
}),cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(m)))))
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(m);
} else
{return null;
}
}),cljs.core.drop_while.call(null,(function (p1__8384_SHARP_){return cljs.core.empty_QMARK_.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(p1__8384_SHARP_)));
}),cljs.core.map.call(null,(function (p1__8383_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"marks","marks",1117570744)],[p1__8383_SHARP_,lt.objs.editor.__GT_cm_ed.call(null,ed).findMarksAt({"ch": 0, "line": p1__8383_SHARP_})]);
}),lines)));
});
lt.plugins.sacha.find_first_sibling = (function find_first_sibling(ed,lines,indent){return cljs.core.some.call(null,(function (p1__8386_SHARP_){if(cljs.core._EQ_.call(null,indent,lt.plugins.sacha.line_indent.call(null,ed,p1__8386_SHARP_)))
{return p1__8386_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.find_parent = (function find_parent(ed,lines,indent){return cljs.core.some.call(null,(function (p1__8387_SHARP_){if((indent > lt.plugins.sacha.line_indent.call(null,ed,p1__8387_SHARP_)))
{return p1__8387_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.find_first_non_child = (function find_first_non_child(ed,lines,indent){return cljs.core.some.call(null,(function (p1__8388_SHARP_){if((indent >= lt.plugins.sacha.line_indent.call(null,ed,p1__8388_SHARP_)))
{return p1__8388_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.next_non_child_line = (function next_non_child_line(ed,line){return lt.plugins.sacha.find_first_non_child.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),lt.plugins.sacha.line_indent.call(null,ed,line));
});
/**
* Ensure a line is returned i.e. return line past end-line if on last tree
*/
lt.plugins.sacha.safe_next_non_child_line = (function safe_next_non_child_line(ed,current_line){var or__6813__auto__ = lt.plugins.sacha.next_non_child_line.call(null,ed,current_line);if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
});
lt.plugins.sacha.clear_selection = (function clear_selection(ed){return lt.objs.editor.__GT_cm_ed.call(null,ed).setCursor(lt.objs.editor.cursor.call(null,ed,"anchor"));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-all","sacha.fold-all",3470749607),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold the whole file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sacha.fold_all.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.constantly.call(null,true));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-all","sacha.unfold-all",4075208000),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold the whole file",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.sacha.unfold_all.call(null,lt.objs.editor.pool.last_active.call(null),cljs.core.constantly.call(null,true));
})], null));
var seq__8391_8428 = cljs.core.seq.call(null,cljs.core.range.call(null,1,10));var chunk__8392_8429 = null;var count__8393_8430 = 0;var i__8394_8431 = 0;while(true){
if((i__8394_8431 < count__8393_8430))
{var num_8432 = cljs.core._nth.call(null,chunk__8392_8429,i__8394_8431);lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("sacha.fold-level-"),cljs.core.str(num_8432)].join('')),new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str("sacha: fold level "),cljs.core.str(num_8432),cljs.core.str(" nodes")].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),((function (seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,num_8432){
return (function (){var tabsize = lt.objs.editor.option.call(null,lt.objs.editor.pool.last_active.call(null),"tabSize");var indent = ((num_8432 - 1) * tabsize);var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.unfold_all.call(null,ed,((function (seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8432){
return (function (p1__8389_SHARP_){return (p1__8389_SHARP_ < indent);
});})(seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8432))
);
return lt.plugins.sacha.fold_all.call(null,ed,((function (seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8432){
return (function (p1__8390_SHARP_){return cljs.core._EQ_.call(null,p1__8390_SHARP_,indent);
});})(seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8432))
);
});})(seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,num_8432))
], null));
{
var G__8433 = seq__8391_8428;
var G__8434 = chunk__8392_8429;
var G__8435 = count__8393_8430;
var G__8436 = (i__8394_8431 + 1);
seq__8391_8428 = G__8433;
chunk__8392_8429 = G__8434;
count__8393_8430 = G__8435;
i__8394_8431 = G__8436;
continue;
}
} else
{var temp__4092__auto___8437 = cljs.core.seq.call(null,seq__8391_8428);if(temp__4092__auto___8437)
{var seq__8391_8438__$1 = temp__4092__auto___8437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8391_8438__$1))
{var c__7561__auto___8439 = cljs.core.chunk_first.call(null,seq__8391_8438__$1);{
var G__8440 = cljs.core.chunk_rest.call(null,seq__8391_8438__$1);
var G__8441 = c__7561__auto___8439;
var G__8442 = cljs.core.count.call(null,c__7561__auto___8439);
var G__8443 = 0;
seq__8391_8428 = G__8440;
chunk__8392_8429 = G__8441;
count__8393_8430 = G__8442;
i__8394_8431 = G__8443;
continue;
}
} else
{var num_8444 = cljs.core.first.call(null,seq__8391_8438__$1);lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("sacha.fold-level-"),cljs.core.str(num_8444)].join('')),new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str("sacha: fold level "),cljs.core.str(num_8444),cljs.core.str(" nodes")].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),((function (seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,num_8444,seq__8391_8438__$1,temp__4092__auto___8437){
return (function (){var tabsize = lt.objs.editor.option.call(null,lt.objs.editor.pool.last_active.call(null),"tabSize");var indent = ((num_8444 - 1) * tabsize);var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.unfold_all.call(null,ed,((function (seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8444,seq__8391_8438__$1,temp__4092__auto___8437){
return (function (p1__8389_SHARP_){return (p1__8389_SHARP_ < indent);
});})(seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8444,seq__8391_8438__$1,temp__4092__auto___8437))
);
return lt.plugins.sacha.fold_all.call(null,ed,((function (seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8444,seq__8391_8438__$1,temp__4092__auto___8437){
return (function (p1__8390_SHARP_){return cljs.core._EQ_.call(null,p1__8390_SHARP_,indent);
});})(seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,tabsize,indent,ed,num_8444,seq__8391_8438__$1,temp__4092__auto___8437))
);
});})(seq__8391_8428,chunk__8392_8429,count__8393_8430,i__8394_8431,num_8444,seq__8391_8438__$1,temp__4092__auto___8437))
], null));
{
var G__8445 = cljs.core.next.call(null,seq__8391_8438__$1);
var G__8446 = null;
var G__8447 = 0;
var G__8448 = 0;
seq__8391_8428 = G__8445;
chunk__8392_8429 = G__8446;
count__8393_8430 = G__8447;
i__8394_8431 = G__8448;
continue;
}
}
} else
{}
}
break;
}
lt.plugins.sacha.unfold_branch_one_level = (function unfold_branch_one_level(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var next_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.line_indent.call(null,ed,(first_folded_line - 1)):null);if(cljs.core.truth_(first_folded_line))
{return lt.plugins.sacha.unfold_all.call(null,ed,(function (p1__8395_SHARP_){return (p1__8395_SHARP_ <= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-branch-one-level","sacha.unfold-branch-one-level",759984983),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold current branch one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.unfold_branch_one_level], null));
lt.plugins.sacha.fold_branch_one_level = (function fold_branch_one_level(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var folded_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.line_indent.call(null,ed,(first_folded_line - 1)):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (ed,current_line,next_tree_line,first_folded_line){
return (function (p1__8396_SHARP_){return lt.plugins.sacha.line_indent.call(null,ed,p1__8396_SHARP_);
});})(ed,current_line,next_tree_line,first_folded_line))
,cljs.core.range.call(null,current_line,next_tree_line))));var next_indent = (folded_indent - lt.objs.editor.option.call(null,ed,"tabSize"));return lt.plugins.sacha.fold_all.call(null,ed,(function (p1__8397_SHARP_){return (p1__8397_SHARP_ >= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-branch-one-level","sacha.fold-branch-one-level",2596347984),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold current branch one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.fold_branch_one_level], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.toggle-fold","sacha.toggle-fold",4484191212),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: toggle folding/unfolding the current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.sacha.fold_code.call(null,ed,lt.objs.editor.cursor.call(null,ed),{"rangeFinder": CodeMirror.fold.indent},null);
})], null));
lt.plugins.sacha.jump_to_parent = (function jump_to_parent(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.find_parent.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var parent_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),parent_line,new cljs.core.Keyword(null,"ch","ch",1013907415),(indent - lt.objs.editor.option.call(null,ed,"tabSize"))], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No parent found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-parent","sacha.jump-to-parent",3437903663),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to parent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_parent], null));
lt.plugins.sacha.jump_to_next_sibling = (function jump_to_next_sibling(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),indent);if(cljs.core.truth_(temp__4090__auto__))
{var next_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),next_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No next line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-next-sibling","sacha.jump-to-next-sibling",2543603245),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to next sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_next_sibling], null));
lt.plugins.sacha.jump_to_previous_sibling = (function jump_to_previous_sibling(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var prev_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),prev_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No previous line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-previous-sibling","sacha.jump-to-previous-sibling",3800537265),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to previous sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_previous_sibling], null));
lt.plugins.sacha.select_branch = (function select_branch(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var last_line = (lt.plugins.sacha.safe_next_non_child_line.call(null,ed,line) - 1);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,last_line)], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.select-branch","sacha.select-branch",1413352613),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: select current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.select_branch], null));
lt.plugins.sacha.fold_fn_for_branch = (function fold_fn_for_branch(fold_fn){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);return fold_fn.call(null,ed,cljs.core.constantly.call(null,true),cljs.core.range.call(null,line,lt.plugins.sacha.safe_next_non_child_line.call(null,ed,line)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-all-for-branch","sacha.fold-all-for-branch",1869635376),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold all for current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.fold_fn_for_branch,lt.plugins.sacha.fold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-all-for-branch","sacha.unfold-all-for-branch",1492305911),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold all for current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.fold_fn_for_branch,lt.plugins.sacha.unfold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unindent-node","sacha.unindent-node",1440905052),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unindent by one level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.indent_line.call(null,ed,lt.objs.editor.cursor.call(null,ed).line,"subtract");
})], null));
/**
* Deletes multiple lines starting on from and including to.
*/
lt.plugins.sacha.delete_lines = (function delete_lines(from,to){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).replaceRange("",{"ch": 0, "line": from},{"ch": 0, "line": (to + 1)});
});
lt.plugins.sacha.move_branch = (function move_branch(direction){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var lines_to_search = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)):cljs.core.range.call(null,(line - 1),-1,-1));var sibling_line = lt.plugins.sacha.find_first_sibling.call(null,ed,lines_to_search,indent);if(cljs.core.not.call(null,sibling_line))
{return lt.objs.notifos.set_msg_BANG_.call(null,((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?"Next line not found":"Previous line not found"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{return lt.objs.editor.operation.call(null,ed,(function (){var current_line_ends = lt.plugins.sacha.next_non_child_line.call(null,ed,line);var next_node_in_new_tree_QMARK_ = ((lt.plugins.sacha.line_indent.call(null,ed,current_line_ends) - indent) < 0);var copied_lines = lt.objs.editor.range.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),current_line_ends,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));var sibling_line_ends = lt.plugins.sacha.next_non_child_line.call(null,ed,sibling_line);var copied_lines__$1 = (cljs.core.truth_(sibling_line_ends)?copied_lines:[cljs.core.str("\n"),cljs.core.str(copied_lines)].join(''));var sibling_line_ends__$1 = (function (){var or__6813__auto__ = sibling_line_ends;if(cljs.core.truth_(or__6813__auto__))
{return or__6813__auto__;
} else
{return (lt.objs.editor.last_line.call(null,ed) + 1);
}
})();var cursor_line = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?((next_node_in_new_tree_QMARK_)?sibling_line:sibling_line_ends__$1):sibling_line);lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),cursor_line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null));
lt.plugins.sacha.delete_lines.call(null,line,(current_line_ends - 1));
lt.objs.editor.insert_at_cursor.call(null,ed,copied_lines__$1);
return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(lt.objs.editor.cursor.call(null,ed).line - (current_line_ends - line)),new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
}));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-branch-below-next-sibling","sacha.move-branch-below-next-sibling",661278437),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current branch below next sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_branch,new cljs.core.Keyword(null,"down","down",1016993812))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-branch-above-previous-sibling","sacha.move-branch-above-previous-sibling",3178376061),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current branch above previous sibling",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_branch,new cljs.core.Keyword(null,"up","up",1013907981))], null));
lt.plugins.sacha.indent_branch = (function indent_branch(direction){var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.select_branch.call(null);
lt.objs.editor.indent_selection.call(null,ed,direction);
return lt.plugins.sacha.clear_selection.call(null,ed);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.indent-branch","sacha.indent-branch",4297706229),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: indent current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.indent_branch,"add")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unindent-branch","sacha.unindent-branch",2998932732),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unindent current branch",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.indent_branch,"subtract")], null));
lt.plugins.sacha.find_disjointed_lines = (function find_disjointed_lines(){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");return cljs.core.remove.call(null,(function (p1__8399_SHARP_){var or__6813__auto__ = (new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__8399_SHARP_) < 0);if(or__6813__auto__)
{return or__6813__auto__;
} else
{return cljs.core.PersistentHashSet.fromArray([0,tabsize], true).call(null,new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__8399_SHARP_));
}
}),cljs.core.map.call(null,(function (p__8402){var vec__8403 = p__8402;var line1 = cljs.core.nth.call(null,vec__8403,0,null);var line2 = cljs.core.nth.call(null,vec__8403,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",1116881521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line1),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line2)], null),new cljs.core.Keyword(null,"difference","difference",2742266031),(new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line2) - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line1))], null);
}),cljs.core.partition.call(null,2,1,cljs.core.map.call(null,(function (p1__8398_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"indent","indent",4124632094)],[p1__8398_SHARP_,lt.plugins.sacha.line_indent.call(null,ed,p1__8398_SHARP_)]);
}),cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1))))));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.find-malformed-lines","sacha.find-malformed-lines",982046763),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: find lines with malformed levels caused by incorrect indents",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.comp.call(null,cljs.core.prn,lt.plugins.sacha.find_disjointed_lines)], null));
}

//# sourceMappingURL=sacha_compiled.js.map