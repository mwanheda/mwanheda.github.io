'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hamburger-container').addEventListener('click', function (e) {
        e.currentTarget.parentNode.classList.toggle('active');
    });
});
