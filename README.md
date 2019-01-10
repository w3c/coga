# Mockups of new coga pages for WAI website

**!!NB!! the content of this 'Orphan branch' should not be merged** as it has nothing in common with the master branch

These pages are hacked copies of WAI website pages. They expected to be served from `https://raw.githack.com/` which acts as a CDN
and serves the correct mime type for a browser to display the html. The 3 pages are linked to each other and the WAI website -
but some links in the content are spurious (this is a 'mockup'). Here is the main coga page

[WAI Website Mock Cognitive Accessibility pages](https://raw.githack.com/w3c/coga/doc-mock/coga/)

## Testing

With Nodejs installed

```bash
npx serve
```

then browse to [http://localhost:5000/coga/](http://localhost:5000/coga/)

## Release process

The `doc-mock` in the URL is in fact a [light weight] tag, not this branch so must be adjusted to point to head of the branch.
So assuming you are checkout at the latest ref of this branch

```bash
git tag -f doc-mock
git push -f --tags
```
