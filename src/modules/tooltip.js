(()=>{addAllTooltips();globalElements.output.explanation.innerHTML='<h2 id="explanationHeading" class="title is-4"></h2>\n\t<div id="explanationContent" class="nms-font"></div>\n\t<a id="explanationLink" target=\'_blank\' rel=\'noopener noreferrer\'>\n\t\t<img id="explanationImg" alt=\'Explainer Image\'>\n\t</a>\n\t<form method="dialog">\n\t\t<button class="button" type="submit" autofocus>Close</button>\n\t</form>',updateGlobalElements({output:{explanationHeading:"explanationHeading",explanationContent:"explanationContent",explanationLink:"explanationLink",explanationImg:"explanationImg"}})})();const cachedImages=new Set;function explanation(t,n,e){const a=globalElements.output.explanationImg,o=globalElements.output.explanationLink,l=globalElements.output.explanation;e?(cachedImages.has(e)?(o.classList.remove("loading"),a.getAttribute("src")!=e&&(a.src="",a.src=e,o.href=e)):(a.src="",a.style.opacity=0,a.style.marginBlockStart=0,a.src=e,o.classList.add("loading"),o.href=e),o.style.display=""):o.style.display="none",globalElements.output.explanationHeading.innerText=t,globalElements.output.explanationContent.innerHTML=n,a.onload=()=>{a.style.marginBlockStart="1rem",a.style.opacity=1,cachedImages.add(e)},l.style.translate="0 -100vh",l.showModal(),l.style.translate="0 0",l.scrollTo(0,0)}function addAllTooltips(){const t=document.querySelectorAll("span.tooltip");for(const e of t)n(e);function n(t){const n=t.getElementsByTagName("data");if(!n.length)return;const e=new Array;for(const t of n){const n=t.innerHTML;e.push(n)}const a=document.createElement("img");a.src="./assets/vector/help.svg",a.alt="Help";const o=document.createElement("span");o.classList.add("tooltiptext","nms-font"),o.innerHTML=e[0],e.length>1&&assignFunction(t,"explanation(`"+(e[1]??"")+"`,`"+(e[2]??"")+"`,`"+(e[3]??"")+"`)","onclick"),t.innerHTML=a.outerHTML+o.outerHTML}}
