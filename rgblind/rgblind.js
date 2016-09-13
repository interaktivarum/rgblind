/*
Copyright (c) 2016 Interaktiva rum Sverige (Interactive rooms Sweden)

Website: http://www.interaktivarum.se/en

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//Should SVG be injected into the HTML document?
//Default: false
var doInjectSVG = false;

//When document is ready
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        if(!doInjectSVG){
        	injectCSS();
        }
        else{
	        injectCSSFromFile();
	        injectSVG();
        }
    }
}

var injectCSS = function(){
	
	var sheet = window.document.styleSheets[0];
	
	var protanopia = " \
		.protanopia { \
			filter: url('" + getScriptPath() + "rgblind.svg#protanopia') !important; \
			-webkit-filter: url('" + getScriptPath() + "rgblind.svg#protanopia') !important; \
			color-interpolation-filters:sRGB !important; \
		}";
	sheet.insertRule(protanopia, sheet.cssRules.length);
	
	var deuteranopia = " \
		.deuteranopia { \
			filter: url('" + getScriptPath() + "rgblind.svg#deuteranopia') !important; \
			-webkit-filter: url('" + getScriptPath() + "rgblind.svg#deuteranopia') !important; \
			color-interpolation-filters:sRGB !important; \
		}";
	sheet.insertRule(deuteranopia, sheet.cssRules.length);	
	
	var tritanopia = " \
		.tritanopia { \
			filter: url('" + getScriptPath() + "rgblind.svg#tritanopia') !important; \
			-webkit-filter: url('" + getScriptPath() + "rgblind.svg#tritanopia') !important; \
			color-interpolation-filters:sRGB !important; \
		}";
	sheet.insertRule(tritanopia, sheet.cssRules.length);
	
}

var injectCSSFromFile = function(){
	var inject  = document.createElement("link");
	inject.setAttribute("rel", "stylesheet");
	inject.setAttribute("type", "text/css");
	inject.setAttribute("href", getScriptPath()+"rgblind.css");	
	document.getElementsByTagName("head")[0].appendChild(inject);
}

var injectSVG = function(){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", getScriptPath()+"rgblind.svg", true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("rgblind");
			inject.innerHTML = xmlHttp.responseText;
			document.body.appendChild(inject);
		}
	};
}

var getScriptPath = function(){
	var scripts= document.getElementsByTagName('script');
	var path= scripts[scripts.length-1].src.split('?')[0];
	return path.split('/').slice(0, -1).join('/')+'/';
}