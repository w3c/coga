#!/bin/bash
# process files 

SOURCEDIR=.
DESTDIR=_site

rm -rf $DESTDIR 
for dir in $DESTDIR $DESTDIR/content $DESTDIR/_patterns $DESTDIR/_objectives; do mkdir $dir; done

parse_file () {
  sed -e '1d' -e '/^<pre class="yaml remove"/d' -e 's/^<\/pre>$/---/' $1 > $2/${1#$SOURCEDIR/}
}

parse_file $SOURCEDIR/about.html $DESTDIR/content
for file in $SOURCEDIR/o?.html; do parse_file $file $DESTDIR/_objectives; done
for file in $SOURCEDIR/o?p*.html; do parse_file $file $DESTDIR/_patterns; done