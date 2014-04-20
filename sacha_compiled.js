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
var fold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__8414 = cljs.core.seq.call(null,lines);var chunk__8415 = null;var count__8416 = 0;var i__8417 = 0;while(true){
if((i__8417 < count__8416))
{var line = cljs.core._nth.call(null,chunk__8415,i__8417);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__8447 = seq__8414;
var G__8448 = chunk__8415;
var G__8449 = count__8416;
var G__8450 = (i__8417 + 1);
seq__8414 = G__8447;
chunk__8415 = G__8448;
count__8416 = G__8449;
i__8417 = G__8450;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8414);if(temp__4092__auto__)
{var seq__8414__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8414__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8414__$1);{
var G__8451 = cljs.core.chunk_rest.call(null,seq__8414__$1);
var G__8452 = c__7561__auto__;
var G__8453 = cljs.core.count.call(null,c__7561__auto__);
var G__8454 = 0;
seq__8414 = G__8451;
chunk__8415 = G__8452;
count__8416 = G__8453;
i__8417 = G__8454;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__8414__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"fold");
} else
{}
{
var G__8455 = cljs.core.next.call(null,seq__8414__$1);
var G__8456 = null;
var G__8457 = 0;
var G__8458 = 0;
seq__8414 = G__8455;
chunk__8415 = G__8456;
count__8416 = G__8457;
i__8417 = G__8458;
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
var unfold_all__3 = (function (ed,condition,lines){return lt.objs.editor.operation.call(null,ed,(function (){var seq__8422 = cljs.core.seq.call(null,lines);var chunk__8423 = null;var count__8424 = 0;var i__8425 = 0;while(true){
if((i__8425 < count__8424))
{var line = cljs.core._nth.call(null,chunk__8423,i__8425);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__8459 = seq__8422;
var G__8460 = chunk__8423;
var G__8461 = count__8424;
var G__8462 = (i__8425 + 1);
seq__8422 = G__8459;
chunk__8423 = G__8460;
count__8424 = G__8461;
i__8425 = G__8462;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8422);if(temp__4092__auto__)
{var seq__8422__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8422__$1))
{var c__7561__auto__ = cljs.core.chunk_first.call(null,seq__8422__$1);{
var G__8463 = cljs.core.chunk_rest.call(null,seq__8422__$1);
var G__8464 = c__7561__auto__;
var G__8465 = cljs.core.count.call(null,c__7561__auto__);
var G__8466 = 0;
seq__8422 = G__8463;
chunk__8423 = G__8464;
count__8424 = G__8465;
i__8425 = G__8466;
continue;
}
} else
{var line = cljs.core.first.call(null,seq__8422__$1);if(cljs.core.truth_(condition.call(null,lt.plugins.sacha.line_indent.call(null,ed,line))))
{lt.plugins.sacha.fold_code.call(null,ed,{"ch": 0, "line": line},{"rangeFinder": CodeMirror.fold.indent},"unfold");
} else
{}
{
var G__8467 = cljs.core.next.call(null,seq__8422__$1);
var G__8468 = null;
var G__8469 = 0;
var G__8470 = 0;
seq__8422 = G__8467;
chunk__8423 = G__8468;
count__8424 = G__8469;
i__8425 = G__8470;
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
lt.plugins.sacha.find_first_folded_line = (function find_first_folded_line(ed,lines){return cljs.core.some.call(null,(function (m){if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__8428_SHARP_){return p1__8428_SHARP_.__isFold;
}),cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(m)))))
{return new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(m);
} else
{return null;
}
}),cljs.core.drop_while.call(null,(function (p1__8427_SHARP_){return cljs.core.empty_QMARK_.call(null,cljs.core.js__GT_clj.call(null,new cljs.core.Keyword(null,"marks","marks",1117570744).cljs$core$IFn$_invoke$arity$1(p1__8427_SHARP_)));
}),cljs.core.map.call(null,(function (p1__8426_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"marks","marks",1117570744)],[p1__8426_SHARP_,lt.objs.editor.__GT_cm_ed.call(null,ed).findMarksAt({"ch": 0, "line": p1__8426_SHARP_})]);
}),lines)));
});
lt.plugins.sacha.find_first_sibling = (function find_first_sibling(ed,lines,indent){return cljs.core.some.call(null,(function (p1__8429_SHARP_){if(cljs.core._EQ_.call(null,indent,lt.plugins.sacha.line_indent.call(null,ed,p1__8429_SHARP_)))
{return p1__8429_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.find_parent = (function find_parent(ed,lines,indent){return cljs.core.some.call(null,(function (p1__8430_SHARP_){if((indent > lt.plugins.sacha.line_indent.call(null,ed,p1__8430_SHARP_)))
{return p1__8430_SHARP_;
} else
{return null;
}
}),lines);
});
lt.plugins.sacha.find_first_non_child = (function find_first_non_child(ed,lines,indent){return cljs.core.some.call(null,(function (p1__8431_SHARP_){if((indent >= lt.plugins.sacha.line_indent.call(null,ed,p1__8431_SHARP_)))
{return p1__8431_SHARP_;
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
var seq__8434_8471 = cljs.core.seq.call(null,cljs.core.range.call(null,1,10));var chunk__8435_8472 = null;var count__8436_8473 = 0;var i__8437_8474 = 0;while(true){
if((i__8437_8474 < count__8436_8473))
{var num_8475 = cljs.core._nth.call(null,chunk__8435_8472,i__8437_8474);lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("sacha.fold-level-"),cljs.core.str(num_8475)].join('')),new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str("sacha: fold level "),cljs.core.str(num_8475),cljs.core.str(" nodes")].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),((function (seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,num_8475){
return (function (){var tabsize = lt.objs.editor.option.call(null,lt.objs.editor.pool.last_active.call(null),"tabSize");var indent = ((num_8475 - 1) * tabsize);var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.unfold_all.call(null,ed,((function (seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8475){
return (function (p1__8432_SHARP_){return (p1__8432_SHARP_ < indent);
});})(seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8475))
);
return lt.plugins.sacha.fold_all.call(null,ed,((function (seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8475){
return (function (p1__8433_SHARP_){return cljs.core._EQ_.call(null,p1__8433_SHARP_,indent);
});})(seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8475))
);
});})(seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,num_8475))
], null));
{
var G__8476 = seq__8434_8471;
var G__8477 = chunk__8435_8472;
var G__8478 = count__8436_8473;
var G__8479 = (i__8437_8474 + 1);
seq__8434_8471 = G__8476;
chunk__8435_8472 = G__8477;
count__8436_8473 = G__8478;
i__8437_8474 = G__8479;
continue;
}
} else
{var temp__4092__auto___8480 = cljs.core.seq.call(null,seq__8434_8471);if(temp__4092__auto___8480)
{var seq__8434_8481__$1 = temp__4092__auto___8480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8434_8481__$1))
{var c__7561__auto___8482 = cljs.core.chunk_first.call(null,seq__8434_8481__$1);{
var G__8483 = cljs.core.chunk_rest.call(null,seq__8434_8481__$1);
var G__8484 = c__7561__auto___8482;
var G__8485 = cljs.core.count.call(null,c__7561__auto___8482);
var G__8486 = 0;
seq__8434_8471 = G__8483;
chunk__8435_8472 = G__8484;
count__8436_8473 = G__8485;
i__8437_8474 = G__8486;
continue;
}
} else
{var num_8487 = cljs.core.first.call(null,seq__8434_8481__$1);lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.keyword.call(null,[cljs.core.str("sacha.fold-level-"),cljs.core.str(num_8487)].join('')),new cljs.core.Keyword(null,"desc","desc",1016984067),[cljs.core.str("sacha: fold level "),cljs.core.str(num_8487),cljs.core.str(" nodes")].join(''),new cljs.core.Keyword(null,"exec","exec",1017031683),((function (seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,num_8487,seq__8434_8481__$1,temp__4092__auto___8480){
return (function (){var tabsize = lt.objs.editor.option.call(null,lt.objs.editor.pool.last_active.call(null),"tabSize");var indent = ((num_8487 - 1) * tabsize);var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.unfold_all.call(null,ed,((function (seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8487,seq__8434_8481__$1,temp__4092__auto___8480){
return (function (p1__8432_SHARP_){return (p1__8432_SHARP_ < indent);
});})(seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8487,seq__8434_8481__$1,temp__4092__auto___8480))
);
return lt.plugins.sacha.fold_all.call(null,ed,((function (seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8487,seq__8434_8481__$1,temp__4092__auto___8480){
return (function (p1__8433_SHARP_){return cljs.core._EQ_.call(null,p1__8433_SHARP_,indent);
});})(seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,tabsize,indent,ed,num_8487,seq__8434_8481__$1,temp__4092__auto___8480))
);
});})(seq__8434_8471,chunk__8435_8472,count__8436_8473,i__8437_8474,num_8487,seq__8434_8481__$1,temp__4092__auto___8480))
], null));
{
var G__8488 = cljs.core.next.call(null,seq__8434_8481__$1);
var G__8489 = null;
var G__8490 = 0;
var G__8491 = 0;
seq__8434_8471 = G__8488;
chunk__8435_8472 = G__8489;
count__8436_8473 = G__8490;
i__8437_8474 = G__8491;
continue;
}
}
} else
{}
}
break;
}
lt.plugins.sacha.unfold_one_level_for_current_tree = (function unfold_one_level_for_current_tree(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var next_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.line_indent.call(null,ed,(first_folded_line - 1)):null);if(cljs.core.truth_(first_folded_line))
{return lt.plugins.sacha.unfold_all.call(null,ed,(function (p1__8438_SHARP_){return (p1__8438_SHARP_ <= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
} else
{return null;
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-one-level-for-current-tree","sacha.unfold-one-level-for-current-tree",3847050507),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfolds current tree one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.unfold_one_level_for_current_tree], null));
lt.plugins.sacha.fold_one_level_for_current_tree = (function fold_one_level_for_current_tree(){var ed = lt.objs.editor.pool.last_active.call(null);var current_line = lt.objs.editor.cursor.call(null,ed).line;var next_tree_line = lt.plugins.sacha.safe_next_non_child_line.call(null,ed,current_line);var first_folded_line = lt.plugins.sacha.find_first_folded_line.call(null,ed,cljs.core.range.call(null,current_line,next_tree_line));var folded_indent = (cljs.core.truth_(first_folded_line)?lt.plugins.sacha.line_indent.call(null,ed,(first_folded_line - 1)):cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (ed,current_line,next_tree_line,first_folded_line){
return (function (p1__8439_SHARP_){return lt.plugins.sacha.line_indent.call(null,ed,p1__8439_SHARP_);
});})(ed,current_line,next_tree_line,first_folded_line))
,cljs.core.range.call(null,current_line,next_tree_line))));var next_indent = (folded_indent - lt.objs.editor.option.call(null,ed,"tabSize"));return lt.plugins.sacha.fold_all.call(null,ed,(function (p1__8440_SHARP_){return (p1__8440_SHARP_ >= next_indent);
}),cljs.core.range.call(null,current_line,next_tree_line));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-one-level-for-current-tree","sacha.fold-one-level-for-current-tree",2353848004),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: folds current tree one level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.fold_one_level_for_current_tree], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.indent-fold","sacha.indent-fold",2818553236),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold by indent",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.plugins.sacha.fold_code.call(null,ed,lt.objs.editor.cursor.call(null,ed),{"rangeFinder": CodeMirror.fold.indent},null);
})], null));
lt.plugins.sacha.jump_to_parent = (function jump_to_parent(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.find_parent.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var parent_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),parent_line,new cljs.core.Keyword(null,"ch","ch",1013907415),(indent - lt.objs.editor.option.call(null,ed,"tabSize"))], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No parent found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-to-parent","sacha.jump-to-parent",3437903663),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to parent",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_to_parent], null));
lt.plugins.sacha.jump_forward_on_same_level = (function jump_forward_on_same_level(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)),indent);if(cljs.core.truth_(temp__4090__auto__))
{var next_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),next_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No next line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-forward-on-same-level","sacha.jump-forward-on-same-level",4210323574),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to next line on same level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_forward_on_same_level], null));
lt.plugins.sacha.jump_backward_on_same_level = (function jump_backward_on_same_level(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var temp__4090__auto__ = lt.plugins.sacha.find_first_sibling.call(null,ed,cljs.core.range.call(null,(line - 1),-1,-1),indent);if(cljs.core.truth_(temp__4090__auto__))
{var prev_line = temp__4090__auto__;return lt.objs.editor.move_cursor.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),prev_line,new cljs.core.Keyword(null,"ch","ch",1013907415),indent], null));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"No previous line found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.jump-backward-on-same-level","sacha.jump-backward-on-same-level",4498940210),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: jump to previous line on same level",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.jump_backward_on_same_level], null));
lt.plugins.sacha.select_current_tree = (function select_current_tree(){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var last_line = (lt.plugins.sacha.safe_next_non_child_line.call(null,ed,line) - 1);return lt.objs.editor.set_selection.call(null,ed,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),last_line,new cljs.core.Keyword(null,"ch","ch",1013907415),lt.objs.editor.line_length.call(null,ed,last_line)], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.select-current-tree","sacha.select-current-tree",683774389),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: select current tree",new cljs.core.Keyword(null,"exec","exec",1017031683),lt.plugins.sacha.select_current_tree], null));
lt.plugins.sacha.fold_fn_for_current_tree = (function fold_fn_for_current_tree(fold_fn){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);return fold_fn.call(null,ed,cljs.core.constantly.call(null,true),cljs.core.range.call(null,line,lt.plugins.sacha.safe_next_non_child_line.call(null,ed,line)));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.fold-all-for-current-tree","sacha.fold-all-for-current-tree",4537225216),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: fold all for current tree",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.fold_fn_for_current_tree,lt.plugins.sacha.fold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unfold-all-for-current-tree","sacha.unfold-all-for-current-tree",4118611847),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unfold all for current tree",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.fold_fn_for_current_tree,lt.plugins.sacha.unfold_all)], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.outdent","sacha.outdent",3025277799),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Outdent by one level",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);return lt.objs.editor.indent_line.call(null,ed,lt.objs.editor.cursor.call(null,ed).line,"subtract");
})], null));
/**
* Deletes multiple lines starting on from and including to.
*/
lt.plugins.sacha.delete_lines = (function delete_lines(from,to){return lt.objs.editor.__GT_cm_ed.call(null,lt.objs.editor.pool.last_active.call(null)).replaceRange("",{"ch": 0, "line": from},{"ch": 0, "line": (to + 1)});
});
lt.plugins.sacha.move_current_tree = (function move_current_tree(direction){var ed = lt.objs.editor.pool.last_active.call(null);var line = lt.objs.editor.cursor.call(null,ed).line;var indent = lt.plugins.sacha.line_indent.call(null,ed,line);var lines_to_search = ((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"down","down",1016993812)))?cljs.core.range.call(null,(line + 1),(lt.objs.editor.last_line.call(null,ed) + 1)):cljs.core.range.call(null,(line - 1),-1,-1));var sibling_line = lt.plugins.sacha.find_first_sibling.call(null,ed,lines_to_search,indent);if(cljs.core.not.call(null,sibling_line))
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-current-tree-down","sacha.move-current-tree-down",1131806963),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current tree down",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_current_tree,new cljs.core.Keyword(null,"down","down",1016993812))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.move-current-tree-up","sacha.move-current-tree-up",1671009964),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: Move current tree up",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.move_current_tree,new cljs.core.Keyword(null,"up","up",1013907981))], null));
lt.plugins.sacha.indent_current_tree = (function indent_current_tree(direction){var ed = lt.objs.editor.pool.last_active.call(null);lt.plugins.sacha.select_current_tree.call(null);
lt.objs.editor.indent_selection.call(null,ed,direction);
return lt.plugins.sacha.clear_selection.call(null,ed);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.indent-selection","sacha.indent-selection",1360550781),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: indents current selection",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.indent_current_tree,"add")], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.unindent-selection","sacha.unindent-selection",2959671318),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: unindents current selection",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sacha.indent_current_tree,"subtract")], null));
lt.plugins.sacha.find_disjointed_lines = (function find_disjointed_lines(){var ed = lt.objs.editor.pool.last_active.call(null);var tabsize = lt.objs.editor.option.call(null,ed,"tabSize");return cljs.core.remove.call(null,(function (p1__8442_SHARP_){var or__6813__auto__ = (new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__8442_SHARP_) < 0);if(or__6813__auto__)
{return or__6813__auto__;
} else
{return cljs.core.PersistentHashSet.fromArray([0,tabsize], true).call(null,new cljs.core.Keyword(null,"difference","difference",2742266031).cljs$core$IFn$_invoke$arity$1(p1__8442_SHARP_));
}
}),cljs.core.map.call(null,(function (p__8445){var vec__8446 = p__8445;var line1 = cljs.core.nth.call(null,vec__8446,0,null);var line2 = cljs.core.nth.call(null,vec__8446,1,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lines","lines",1116881521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line1),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(line2)], null),new cljs.core.Keyword(null,"difference","difference",2742266031),(new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line2) - new cljs.core.Keyword(null,"indent","indent",4124632094).cljs$core$IFn$_invoke$arity$1(line1))], null);
}),cljs.core.partition.call(null,2,1,cljs.core.map.call(null,(function (p1__8441_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"indent","indent",4124632094)],[p1__8441_SHARP_,lt.plugins.sacha.line_indent.call(null,ed,p1__8441_SHARP_)]);
}),cljs.core.range.call(null,lt.objs.editor.first_line.call(null,ed),(lt.objs.editor.last_line.call(null,ed) + 1))))));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sacha.find-malformed-lines","sacha.find-malformed-lines",982046763),new cljs.core.Keyword(null,"desc","desc",1016984067),"sacha: find lines with malformed levels caused by incorrect indents",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.comp.call(null,cljs.core.prn,lt.plugins.sacha.find_disjointed_lines)], null));
}

//# sourceMappingURL=sacha_compiled.js.map