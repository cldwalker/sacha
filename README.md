## Description

sacha is an [outliner](http://en.wikipedia.org/wiki/Outliner) for Light Table.
It comes with a full set of commands for folding/unfolding trees, changing their
levels and moving branches around.

## Usage

sacha comes with a full set of commands for manipulating your trees of notes. These commands can be found
in the command bar with the prefix `sacha: `. sacha also comes with [keybindings](#TODO) for most of these commands.
sacha files end in `.otl`.

Here is a breakdown of sacha's commands:

TODO

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
  indents will cause levels to be off. If you suspect your file has such lines, use the `:ltfiles.find-malformed-lines`
  command to find them.
* Unindenting on a line with no text will cause the cursor to jump to the beginning of the line.
* Moving a branch up or down and then undoing it can cause the cursor to jump just above/below the branch.
