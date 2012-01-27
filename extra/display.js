(function($){
    var href = document.location.href;
    var bison_service = 'http://incompatible.hotglue.org/pjson.php?src=' + href + '&callback=?';
    $.getJSON(bison_service,{}, function(iframe_sources){
        if( iframe_sources.length == 0 ){
            return;
        }

        $('body').append('<iframe scrolling="no" id="hotglue-frame-a" src="' + cycleIframeSources() + '" width="100%" height="100%">');
        $('body').append('<iframe scrolling="no" id="hotglue-frame-b" src="' + cycleIframeSources() + '" width="100%" height="100%">');

        $('#hotglue-frame-b').hide();
        $('#hotglue-frame-a').hide();

        var body_height = $('body').css('height');

        $('#hotglue-frame-a').css('height', body_height );
        $('#hotglue-frame-b').css('height', body_height );

        $('body').append('<div id="hotglue-frame-trigger"></div>' )

        var iframe_cycle = ['#hotglue-frame-a', '#hotglue-frame-b'];

        function cycleIframeSources(){
            var source = iframe_sources.shift();
            iframe_sources.push(source);
            return source;
        }

        function cycleIframe(){
            var sel = iframe_cycle.shift();

            $(sel).show();
            $(iframe_cycle[0]).hide();
            $(iframe_cycle[0]).attr('src', cycleIframeSources() );

            iframe_cycle.push(sel);

            return sel;
        }

        function scrollBottom(){
            var top      = $(window).scrollTop(),
                vpHeight = $(window).height(),
                bottom   = $('#hotglue-frame-trigger').offset().top;

            if( ( top + vpHeight ) > bottom - 50 ){
                return true;
            }

            return false;
        }

        $(document).scroll(function(){
            if( scrollBottom() ){
                var sel = cycleIframe();
                $(window).scrollTop( $(sel).offset().top );
            }
        });
    });
}(jQuery))
