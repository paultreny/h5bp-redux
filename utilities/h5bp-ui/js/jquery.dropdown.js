var H5BP = H5BP || {};

H5BP.dropdown = (function () {

    var allDropdownEls = $('.js-dropdown');

    // Hide all open dropdown trays and show the target's tray
    $('body').on('click', '.js-dropdown-control', function ( e ) {
        e.preventDefault();

        var _this = $(this),
            dropdown = _this.parents('.js-dropdown');

        dropdown.toggleClass('open');
        allDropdownEls.not(dropdown).removeClass('open');
    });

    // Hide all dropdown trays when clicking outside of them (i.e on the document)
    $(document).click( function ( e ) {
        var target = $(e.target);
        if ( target.parents('.open').length === 0 ) {
            allDropdownEls.removeClass('open');
        }
        e.stopPropagation();
    });

}());
