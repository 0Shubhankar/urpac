/* URPAC: independent, dependency-free interactions. */
(function () {
  'use strict';
  document.querySelectorAll('[data-copyright]').forEach(function (item) {
    item.textContent = '© ' + new Date().getFullYear() + ' URPAC';
  });
  document.querySelectorAll('.map-controls').forEach(function (controls) {
    var map = controls.closest('.urban-map');
    controls.querySelectorAll('button').forEach(function (button) {
      button.addEventListener('click', function () {
        var label = button.textContent.trim();
        map.classList.remove('map-built-form', 'map-land-use', 'map-connections');
        map.classList.add('map-' + label.toLowerCase().replace(/ /g, '-'));
        controls.querySelectorAll('button').forEach(function (item) {
          item.setAttribute('aria-pressed', String(item === button));
        });
        var graphic = map.querySelector('svg[role="img"]');
        if (graphic) graphic.setAttribute('aria-label', 'Illustrative urban diagram showing ' + label.toLowerCase() + ', not a real location');
      });
    });
  });
})();
