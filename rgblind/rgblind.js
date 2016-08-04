document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        
        injectCSS();
        injectSVG();
		
    }
}

var injectCSS = function(){
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
	        var inject  = document.createElement("temp");
			inject.innerHTML = xmlHttp.responseText;
			document.body.appendChild(inject.firstChild);
		}
	};
}

var getScriptPath = function(){
	var scripts= document.getElementsByTagName('script');
	var path= scripts[scripts.length-1].src.split('?')[0];
	return path.split('/').slice(0, -1).join('/')+'/';
}