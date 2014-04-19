## Description

sacha is an [outliner](http://en.wikipedia.org/wiki/Outliner) for Light Table.
It comes with a full set of commands for folding/unfolding trees, changing their
levels and moving branches around. sacha means tree in [Quechua](#http://en.wikipedia.org/wiki/Quechua_languages).

## Usage

sacha comes with a full set of commands for creating and editing outlines. These commands can be found
in the command bar with the prefix `sacha: `. sacha also comes with [keybindings](#TODO) for most of these commands.
sacha files end in `.otl`.


Here is a breakdown of sacha's commands:


### Basic

* `:sacha.indent-node`: Indents the current node by one level
* `:sacha.unindent-node`: Unindents the current node by one level
* `:sacha.indent-branch`: Indents the current branch by one level
* `:sacha.unindent-branch`: Unindents the current branch by one level
* `:sacha.select-branch`: Selects the current branch. Useful in combination with delete, yank or replace.

* Fold and Unfold
  * `:sacha.fold-all`: Folds all branches to closed position
  * `:sacha.unfold-all`: Unfolds all branches to open position
  * `:sacha.fold-level-1` to `:sacha.fold-level-9`: Commands to unfold up to levels 1 - 9
  * `:sacha.fold-branch-one-level`: Folds branch to be one level less than current folded level
  * `:sacha.unfold-branch-one-level`: Unfolds branch to be one level more than current unfolded level
  * `:sacha.fold-all-branch`: Folds all children for current branch
  * `:sacha.unfold-all-branch`: Unfolds all children for current branch

### Miscellaneous

* `:sacha.jump-to-parent`: Jump cursor to parent node
* `:sacha.jump-to-next-sibling`: Jump cursor to next sibling (even across branches)
* `:sacha.jump-to-previous-sibling`: Jump cursor to previous sibling (even across branches)
* `:sacha.move-branch-above-previous-sibling`: Move current branch to be before the previous sibling
* `:sacha.move-branch-below-next-sibling`: Move current branch to be after the next sibling

Multiple LT commands can be combined into one keystroke. For example, sacha provides [a keystroke](#TODO) to fold up to the parent using two of the above commands.

Note: if you're looking for other editing functions, remember Light Table has both [vim](https://github.com/LightTable/Vim) and [emacs](https://github.com/LightTable/Emacs) keybindings.

## Motivation

There is a [long list](http://en.wikipedia.org/wiki/Outliner#Desktop_outliners) of existing outliners. So why another?
The two major reasons are:

* Light Table has no outliner. Since I'm using LT as my daily editor, I want to make sure the most effective way I
  take notes is possible from it.
* There are very few outliners written in higher-level languages. By writing sacha in js/cljs I want to enable
  myself and others to explore new ways of improving outlining without having to dip into viml, elisp or C.

## Limitations

* sacha should only be used on files with a consistent indent scheme. For example, changing your tabSize from 2 to 4
  midway through a file will muck with outline levels. Likewise, files that have a mix of tabs and whitespaces for
  indents will cause levels to be off. If you suspect your file has such lines, use the `:sacha.find-malformed-lines`
  command to find them.
* Unindenting on a line with no text will cause the cursor to jump to the beginning of the line.
* Moving a branch up or down and then undoing it can cause the cursor to jump just above/below the branch.

## Bugs/Issues

Please report them [on github](http://github.com/cldwalker/sacha/issues).

## Contributions

[See here](http://tagaholic.me/contributing.html) for contributing guidelines.

##TODO
* Move the core of this plugin to a CodeMirror plugin so most of this available in a browser :)
* Zoom/hoist branches

## License
See LICENSE.txt
