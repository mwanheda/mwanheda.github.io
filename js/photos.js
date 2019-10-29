$(document).ready(function () {
    // Init Masonry
    let $grid = $('.masonry-grid').masonry({
        columnWidth: '.masonry-grid-sizer',
        gutter: '.masonry-gutter-sizer',
        itemSelector: '.masonry-grid-item',
        percentPosition: false,
        horizontalOrder: true,
        fitWidth: true
    });

    // Layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

});
