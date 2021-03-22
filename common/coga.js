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

function termTitles() {
	// put definitions into title attributes of term references
	document.querySelectorAll('.internalDFN').forEach(function(node){
		node.title = document.querySelector(node.href.substring(node.href.indexOf('#'))).parentNode.nextElementSibling.firstElementChild.textContent.trim().replace(/\s+/g,' ');
	});	
}
 *  */

function adjustDfnData() {
	document.querySelectorAll('dfn').forEach(function(node){
		var datalt = node.getAttributeNode("data-lt");
		var curVal = node.getAttribute("data-lt");
		node.setAttribute("data-lt", node.textContent + (curVal == "" ? "|" : ""));
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

// scripts before Respec has run
function preRespec() {
	adjustDfnData();
}

// scripts after Respec has run
function postRespec() {
	termTitles();
	edNotePermalinks();
}
