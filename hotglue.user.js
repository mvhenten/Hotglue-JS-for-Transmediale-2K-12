// ==UserScript==
// @match http://*.transmediale.de/*
// ==/UserScript==

/**
 * This is a user script to be used for testing this out on
 * transmediale.de
 *
 * FOR TESTING ONLY
 *
 * Install this file by dragging it into chrome or use Greasemonkey for firefox.
 */
(function ($) {
    var hotglue_url = 'http://transmediale.hotglue.org';

    var shuffle = function (a) {
        var tmp, cur, top = a.length;
        if (top) {
            while (--top) {
                cur = Math.floor(Math.random() * (top + 1));
                tmp = a[cur];
                a[cur] = a[top];
                a[top] = tmp;
            }
        }

        return a;
    };

    $.fn.hotglue = function (n) {
        var work = shuffle($.grep(this, function (e) {
            return (e.tagName.toLowerCase() === 'a' && e.href.search(/http:/) > -1);
        })).slice(0, n);

        $(work).each(function (i, e) {
            $(e).attr('href', hotglue_url + '/?s=' + e.href);
        });

        return this;
    };

}(jQuery));

$('.festival-menu a').hotglue(999);
