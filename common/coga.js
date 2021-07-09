/* 
function titleToPathFrag (title) {
	return title.toLowerCase().replace(/[\s,]+/g, "-").replace(/[\(\)]/g, "");
}

function findHeading(el) {
	return el.querySelector('h1, h2, h3, h4, h5, h6');
}

function findFirstTextChild(el) {
	var children = el.childNodes;
	for (i = 0; i < children.length; i++) {
		if (children[i].nodeType == 3) {
			return children[i];
			break;
		}
	}
}

function textNoDescendant(el) {
	var textContent = "";
	el.childNodes.forEach(function(node) {
		if (node.nodeType == 3) textContent += node.textContent;
	})
	return textContent;
}

function sentenceCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function pathToName(path) {
	return sentenceCase(path.replace(/-/g, " "));
}
*/

function termTitles() {
	// put definitions into title attributes of term references
	document.querySelectorAll('.internalDFN').forEach(function(node){
		var result;
		var done = false;
		document.querySelector(node.href.substring(node.href.indexOf('#'))).parentNode.nextElementSibling.querySelectorAll("p").forEach(function(p){
			if (!p.classList.contains("alternates") && !done) {
				var string = p.textContent.trim();
				node.title = string.replace(/(.*?)\..*/, "$1").replace(/\s+/g,' ');
				done = true;
			}
		});
	});	
}

function adjustDfnData() {
	document.querySelectorAll('dfn').forEach(function(node){
		var curVal = node.getAttribute("data-lt");
		node.setAttribute("data-lt", node.textContent + (curVal == null ? "" : "|" + curVal));
	});
}

function edNotePermalinks() {
	document.querySelectorAll(".note").forEach(function(node){
		var id = node.id;
		var heading = node.querySelector(".marker");
		var permaLink = document.createElement("a");
		permaLink.classList.add("self-link");
		permaLink.setAttribute("aria-label", "§");
		permaLink.setAttribute("href", "#" + id);
		heading.appendChild(permaLink);
	});
}

function listTerms() {
	var val = "";
	document.querySelectorAll('dfn').forEach(function(node){
		val += node.innerHTML + "|";
		val += node.attributes["data-lt"].value;
	});
	return val;
}

function stripTag(node) {
	while (node.firstChild) {
		node.parentNode.insertBefore(node.firstChild, node);
	}
	node.parentNode.removeChild(node);
}

function cleanIncludes() {
	document.body.querySelectorAll("title").forEach(function(node){node.remove();});
	document.body.querySelectorAll("body").forEach(function(node){stripTag(node);});
	document.body.querySelectorAll("html").forEach(function(node){stripTag(node);});
}

function getTextNodes() {
  const acceptNode = (/** @type {Text} */ node) => {
    if (!options.wsNodes && !node.data.trim()) {
      return NodeFilter.FILTER_REJECT;
    }
    return NodeFilter.FILTER_ACCEPT;
  };
  const nodeIterator = document.createNodeIterator(
    document.body,
    NodeFilter.SHOW_TEXT,
    acceptNode
  );
  /** @type {Text[]} */
  const textNodes = [];
  let node;
  while ((node = nodeIterator.nextNode())) {
    textNodes.push(/** @type {Text} */ (node));
  }
  return textNodes;
}

function linkTerms() {
	var terms = "";
	document.querySelectorAll("dfn[data-lt]").forEach(function(node){
		terms += node.getAttribute("data-lt") + "|";	
	});
	alert (terms);
}

// scripts before Respec has run
function preRespec() {
	adjustDfnData();
	linkTerms();
	//alert(listTerms());
}

// scripts after Respec has run
function postRespec() {
	termTitles();
	edNotePermalinks();
	cleanIncludes();
}
