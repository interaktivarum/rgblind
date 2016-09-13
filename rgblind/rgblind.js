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