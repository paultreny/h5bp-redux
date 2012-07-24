
!
function($) {

    'use strict';

    function activate( element, container ) {
        container.find('> .active').removeClass('active');
        element.addClass('active');
    }

    function tab( e ) {
        var $this = $(this),
            $ul = $this.closest('ul'),
            href = $this.attr('href'),
            previous,
            $href;
        
        if (/^#\w+/.test(href)) {
            e.preventDefault();

            previous = $ul.find('.active a').last()[0];
            $href = $(href);

            activate($this.parent('li'), $ul);
            activate($href, $href.parent());

            $this.trigger({
                type: 'change',
                relatedTarget: previous
            });
        }
    }

    $.fn.tabs = function( selector ) {
        return this.each(function() {
            $(this).delegate(selector || '.tabs li > a', 'click', tab);
        });
    };

    $(document).ready( function() {
        $('body').tabs('ul[data-tabs] li > a');
    });

}( window.jQuery );
