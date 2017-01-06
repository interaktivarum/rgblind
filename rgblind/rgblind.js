/*
Copyright (c) 2016 Interaktiva rum Sverige (Interactive rooms Sweden)

Website: http://www.interaktivarum.se/en

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        injectSVGFromFile(getScriptPath()+"rgblind.svg");
        injectCSSFromFile(getScriptPath()+"rgblind-inject.css");
    }
}

var injectCSSFromFile = function(filePath){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", filePath, true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("style");
			inject.innerHTML = xmlHttp.responseText;
			//document.body.appendChild(inject);
			document.body.insertBefore(inject, document.body.childNodes[0]);
		}
	};
}

var injectSVGFromFile = function(filePath){
	var xmlHttp = null;	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", filePath, true);
	xmlHttp.send( null );
	xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	        var inject  = document.createElement("temp");
			inject.innerHTML = xmlHttp.responseText;
			//document.body.appendChild(inject.firstChild);
			document.body.insertBefore(inject.firstChild, document.body.childNodes[0]);
		}
	};
}

var getScriptPath = function(){
	var scripts= document.getElementsByTagName('script');
	var path= scripts[scripts.length-1].src.split('?')[0];
	return path.split('/').slice(0, -1).join('/')+'/';
}