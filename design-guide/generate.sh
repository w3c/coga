#!/bin/bash
# Process Design guide files and output to ./design-guide/_build/
# NB run with cwd = repository root ./design-guide/generate
  
SOURCEDIR=design-guide
IMG_SOURCEDIR=content-usable/img
DESTROOT=$SOURCEDIR/_build
CONTENT_DESTDIR=$DESTROOT/content
PATTERN_DESTDIR=$CONTENT_DESTDIR/_patterns
OBJECTIVE_DESTDIR=$CONTENT_DESTDIR/_objectives
IMG_DESTDIR=$DESTROOT/content-images/wai-coga-design-guide

if [ ! -d $SOURCEDIR ]
then
  echo Please run this script from the project root
  exit 1
fi

# Static Template variables for frontmatter 
# NB escape special caracters for sed eg / as \\/
REPOSITORY=w3c\\/coga
FEEDBACK_EMAIL=wai@w3.org

## Parse design guide files - converting to format required by wai-coga-design-guide
# $1 = source file
# $2 = dest folder
# output - sideeffect, writes files into $2
#
# Source filename assumptions: objective = o*-text, pattern = 0*p*-text, extension = .md or .html
# Source file sections are: header for respec only, pre element containing frontmatter, content
# Source Header can be single line # in markdown or HTML <h> on several lines
# Dest file sections are: frontmatter, content
# pre may contain template variables of for ${{ VAR }} that are subsituted
parse_file () {
    # Filename based Template variables for frontmatter 
    FILE_PATH=$1
    FILENAME=${FILE_PATH##*/}; FILENAME=${FILENAME%.md}; FILENAME=${FILENAME%.html}
    FOLDER=${FILE_PATH%/*}
    FILENAME_TEXT=${FILENAME#o*-} # text
    FILENAME_REF="${FILENAME%%-*}" # o1p1 TODO make empty for filename with ut a ref - eg about.md
    FILENAME_OBJREF=${FILENAME_REF%p*} # o1
    FILENAME_PATREF=${FILENAME_REF##o?} # p1
    PATHNAME="${FILE_PATH//\//\\/}"
    GITHUB_INFO="\n  repository: $REPOSITORY\n  path: $PATHNAME"

    # Note bash { grouping only used so we can add comments in line.
    {   
        # Replace pre element with ---
        sed \
        -e 's/^<pre class=\"yaml remove\">/---/' \
        -e 's/^<\/pre>$/---/' $1
    } | {
        # Expand template variables in lines 1 to 20 only
        sed \
        -e "1,20{\
        s/\${{ GITHUB_INFO }}/$GITHUB_INFO/;\
        s/\${{ FEEDBACK_EMAIL }}/$FEEDBACK_EMAIL/;\
        s/\${{ FILENAME }}/$FILENAME/;\
        s/\${{ FILENAME_OBJREF }}/$FILENAME_OBJREF/;\
        s/\${{ FILENAME_REF }}/$FILENAME_REF/;\
        s/\${{ FILENAME_TEXT }}/$FILENAME_TEXT/;\
        s/\${{ FILENAME_PATREF }}/$FILENAME_PATREF/\
        }"
    } | { 
        # Convert h5 to h2
        sed \
        -e 's/<h5 class="coga-5"/<h2/' \
        -e 's/<\/h5/<\/h2/'
    } | {
        # remove related user story link
        tr '\n' '\t' | 
        sed \
        -E 's/<p>\s*Related User Story:[^>]*>[^>]*>[^>]*>//' | 
        tr '\t' '\n' 
    } | {
        # remove glossary links
        sed \
        -E 's/<a>(.*)<\/a>/\1/'
    } | {
        # Delete the header in lines 1 to 4 and any blank lines
        # Note multiple calls to sed as delete interferes with line numbers        
        sed \
        -e '1{/^#/d}' \
        -e '1,4{N;N;N;s/^<[Hh][1-6]>.*<\/[Hh][1-6]>//}' | \
        sed -e '1{/^$/d}'
    } > $2/${1#$SOURCEDIR/}
}

# Clean dest and create empty folders
rm -rf $DESTROOT 
for dir in $DESTROOT $CONTENT_DESTDIR $PATTERN_DESTDIR $OBJECTIVE_DESTDIR $IMG_DESTDIR; do mkdir -p $dir; done

shopt -s extglob  # expanded pattern expansion
shopt -s nullglob # no error if no md files
for file in $SOURCEDIR/o[[:digit:]]-*.{html,md}; do parse_file $file $OBJECTIVE_DESTDIR; done
for file in $SOURCEDIR/o[[:digit:]]p*.{html,md}; do parse_file $file $PATTERN_DESTDIR; done

IMAGE_FILES="StartHere.svg find.svg clear-text.svg glass.svg light.svg memory.svg support.svg tools.svg"
for file in $IMAGE_FILES ; do cp $IMG_SOURCEDIR\/$file $IMG_DESTDIR\/; done

if [ "${1,,}" = "--local-deploy" ]
then
  WAI_REPO="../wai/wai-coga-design-guide"
  echo Deploying _build to local wai-coga-design-guide repo directory at $WAI_REPO
  rm -rf $WAI_REPO/{content/objectives,content/patterns,content-images/wai-coga-design-guide}
  cp -r $DESTROOT/* $WAI_REPO
fi