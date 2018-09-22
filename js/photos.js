$(document).ready(function () {
    $('.pictures-container').flexImages({rowHeight: 500});

    /* Display the modal when the user clicks on an item (image) */
    $('.item').on('click', function () {
        $('#modal').css('display', 'block');
        $('.modal-image').attr('src', $(this).find('img').attr('src'));
        $('#modal-caption').text($(this).find('img').attr('alt'));
    });

    /* Close the modal when the user clicks on the close button (x)*/
    $('#modal-close').on('click', function () {
        $('#modal').css('display', 'none');
    });
});
