var glue_display = (function ($) {
    var href = document.location.href,
        bison_service = 'http://incompatible.hotglue.org/pjson.php?src='
            + href + '&callback=?';

    function scrollBottom() {
        var top      = $(window).scrollTop(),
            vpHeight = $(window).height(),
            bottom   = $('#hotglue-frame-trigger').offset().top;

        // opera shiv, $(window).height() reports wrong dimensions
        if( $.browser.opera && $.browser.version > "9.5" ){
            vpHeight = document.documentElement["clientHeight"];
        }

        if ((top + vpHeight) > bottom - 25) {
            return true;
        }

        return false;
    }

    function cycleIframeSources(iframe_sources ){
        var source = iframe_sources.shift();
        iframe_sources.push(source);
        return source;
    }

    var lock = false;

    function cycleIframe(iframe_cycle, iframe_sources) {
        if( lock ){
            return;
        }

        lock = true;
        var sel = iframe_cycle.shift();

        $(iframe_cycle[0]).fadeOut(600, function(){
            $(sel).fadeIn();
            $(iframe_cycle[0]).attr('src', cycleIframeSources( iframe_sources ) );
            iframe_cycle.push(sel);
            lock = false;
        });

        return sel;
    }

    function json_handler( iframe_sources ){
        if (iframe_sources.length < 2 ){
            return;
        }
        var iframe_cycle = ['#hotglue-frame-a', '#hotglue-frame-b'],
            scroll_top = $(window).scrollTop(),
            body_height = $('body').css('height');

        $('body').append('<iframe scrolling="no" id="hotglue-frame-a" src="'
            + iframe_sources[0] + '" width="100%" height="100%">');
        $('body').append('<iframe scrolling="no" id="hotglue-frame-b" src="'
            + iframe_sources[1] + '" width="100%" height="100%">');

        $('#hotglue-frame-b').hide();
        $('#hotglue-frame-a').hide();


        $('#hotglue-frame-a').css('height', body_height );
        $('#hotglue-frame-b').css('height', body_height );

        $('body').append('<div id="hotglue-frame-trigger"></div>' );


        $(document).scroll(function( evt ){
            var delta = scroll_top -  $(window).scrollTop();
            scroll_top = $(window).scrollTop();

            if( scrollBottom() && (delta < 0) ){
                var sel = cycleIframe( iframe_cycle, iframe_sources );
                $(window).scrollTop( $(sel).offset().top );
            }
        });
    }

    return {
        initialize: function(){
            $.getJSON(bison_service,{}, json_handler );
        }
    };
}(jQuery));
