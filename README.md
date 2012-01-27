## Simple jQuery plugin that injects the 'hotglue' feature into jquery

This is a one-off plugin for transmediale 2012 site. All it does is pick
a number of links out of a jquery selection, and changes them into something
like:

    hxxp://myproject.org?s=[[original href]]

Links are first picked from a map, then shuffled, and finally, sliced up to n,
where n is the amount of links to be converted.

### LINKS:

* http://hotglue.org
* http://transmediale.de
* http://en.wikipedia.org/wiki/Fisher-Yates_shuffle

### FILES:

* hotglue.plugin.js
 - Uncompressed script source

* hotglue.min.js
 - Minified sources
 
* hotglue.user.js
 - A chrome-user script to test functionality: it inserts a script tag
    containing hotglue.plugin.min.js

## SYNOPSIS:

```html

    <!-- before body, after jquery -->
    <script src="hotglue.plugin.js"></script>
    <script>
    $.ready(function(){
        // will hijack 5 links from '.festival a' randomly
        $('.festival-menu a').hotglue(5);

        // will hijack just about every link etc. etc.
        $('a').hotglue(999);
    });
    </script>

```

## License

Copyright (c) Matthijs van Henten (http://ischen.nl), 2011-2012.

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.    See the
GNU General Public License for more details.
