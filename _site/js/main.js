'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var hasMores = document.querySelectorAll('.js-has-more');
  hasMores.forEach(function (hasMore) {
    hasMore.addEventListener('click', function (e) {
      e.preventDefault();
      e.currentTarget.parentElement.classList.toggle('open');
    });
  });
});
