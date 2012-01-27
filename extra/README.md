## Display hotglue user pages in an Iframe

A script that injects user pages from hotglue.org at the bottom of your page,
if the viewer has scrolled to the bottom.

Links are retrieved from hotglue using a jsonp request:

    hxxp://incompatible.hotglue.org/pjson.php?src=http://www.transmediale.de/tm2k12

### FILES:

* display.js
    Uncompressed script source
* display.min.js
    Minified sources
* display.user.js
    A chrome-user script to test functionality: it inserts a script tag
    containing display.min.js



### LINKS:

* http://hotglue.org
* http://transmediale.de

## SYNOPSIS:

```html

<!-- display hotglue pages, that's all -->
<script src="display.min.js"></script>


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
