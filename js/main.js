$(document).ready(function () {
    $(".hamburger-container").on("click", function () {
        $(this).parent().toggleClass("active");
    })
});
