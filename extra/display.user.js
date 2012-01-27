// ==UserScript==
// @match http://*.transmediale.de/*
// ==/UserScript==

/**
 * testing hack for display.js
 */
function scriptTag(src, callback) {

	var s = document.createElement('script');
	s.type = 'text/' + (src.type || 'javascript');
	s.src = src.src || src;
	s.async = false;

    s.onreadystatechange = s.onload = function() {

        var state = s.readyState;

        if (!callback.done && (!state || /loaded|complete/.test(state))) {
            callback.done = true;
            callback();
        }
    };

    // use body if available. more safe in IE
    (document.body || head).appendChild(s);
}

var domain = 'https://raw.github.com/mvhenten/Hotglue-JS-for-Transmediale-2K-12/master/extra/display.min.js';
//var domain = 'http://bison.localhost/display.js';

scriptTag('https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js', function(){
    scriptTag( 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js', function(){
        scriptTag( domain, function(){/* all is well at kwarter pas twelve */});
    });
})
