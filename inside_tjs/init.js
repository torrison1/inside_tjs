insideJS = {};
insideJS.tools = {};

insideJS.tools.getFile = function (U) {
	var X = new XMLHttpRequest();
	X.open('GET', U, false);
	X.send();
	return X.responseText;
};

insideJS.loadScript = function(url, callback = function(){}){

	if (!insideJS.isScriptLoaded(url)) {
		var script = document.createElement("script")
		script.type = "text/javascript";

		if (script.readyState){  //IE
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" ||
					script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {  //Others
			script.onload = function(){
				callback();
			};
		}

		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}

};

insideJS.isScriptLoaded = function (src)
{
	return document.querySelector('script[src="' + src + '"]') ? true : false;
};
