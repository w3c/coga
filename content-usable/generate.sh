#!/bin/bash
# process files 
# NB run in repository root 
  
SOURCEDIR=content-usable/dg
DESTDIR=$SOURCEDIR/_site

# Static Template variables for frontmatter 
# NB escape special caracters for sed eg / as \\/
REPOSITORY=w3c\\/wai-coga-design-guide
FEEDBACK_EMAIL=wai@w3.org

parse_file () {
    # Filename based Template variables for frontmatter 
    # assumptions: objective = o*-text, pattern = 0*p*-text, extension = .md or .html
    FILE_PATH=$1
    FILENAME=${FILE_PATH##*/}; FILENAME=${FILENAME%.md}; FILENAME=${FILENAME%.html}
    FILENAME_TEXT=${FILENAME#o*-} # text
    FILENAME_REF="${FILENAME%%-*}" # o1p1 TODO make empty for filename with ut a ref - eg about.md
    FILENAME_OBJREF=${FILENAME_REF%p*} # o1
    FILENAME_PATREF=${FILENAME_REF##o?} # p1
    PATHNAME="${FILE_PATH//\//\\/}"
    GITHUB_INFO="\n  repository: $REPOSITORY\n  path: $PATHNAME"


    # Split into to multiple calls to sed to stop deletions interfering
    # file format is header\pre\content
    # header can be single line # in markdown or HTL <h> on several lines
    sed \
        -e 's/^<pre class=\"yaml remove\">/---/' \
        -e 's/^<\/pre>$/---/' \
        -e "1,20{s/\${{ GITHUB_INFO }}/$GITHUB_INFO/;s/\${{ FEEDBACK_EMAIL }}/$FEEDBACK_EMAIL/;s/\${{ FILENAME }}/$FILENAME/;s/\${{ FILENAME_OBJREF }}/$FILENAME_OBJREF/;s/\${{ FILENAME_REF }}/$FILENAME_REF/;s/\${{ FILENAME_TEXT }}/$FILENAME_TEXT/;s/\${{ FILENAME_PATREF }}/$FILENAME_PATREF/}" $1 | \
    sed \
        -e '1{/^#/d}' \
        -e '1,4{N;N;N;s/^<[Hh][1-6]>.*<\/[Hh][1-6]>//}' | \
    sed -e '1{/^$/d}' \
        > $2/${1#$SOURCEDIR/}
}


# cleanup
rm -rf $DESTDIR 
for dir in $DESTDIR $DESTDIR/content $DESTDIR/_patterns $DESTDIR/_objectives; do mkdir $dir; done

parse_file $SOURCEDIR/about.md $DESTDIR/content
for file in $SOURCEDIR/o?-*.html; do parse_file $file $DESTDIR/_objectives; done
for file in $SOURCEDIR/o?p*.html; do parse_file $file $DESTDIR/_patterns; done

cp -r $DESTDIR/* ../wai/wai-coga-design-guide/
