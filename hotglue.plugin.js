/*global window, document, jQuery */

/*
 * Simple plugin that injects the 'hotglue' feature into jquery
 *
 * SYNOPSIS:
 *
 *      // will hijack 5 links from .festival menu randomly
 *      $('.festival-menu a').hotglue(5);
 *
 *      // will hijack just about every link etc. etc.
 *      $('a').hotglue(999);
 *
 *
 * Copyright (c) Matthijs van Henten (http://ischen.nl), 2011-2012.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.    See the
 * GNU General Public License for more details.
 */
(function ($) {
    var hotglue_url = 'http://incompatible.hotglue.org';

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
