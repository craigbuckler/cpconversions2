/*
	menu handler

	// requires: lib.js
*/
/* global ow */
(function() {

  'use strict';

  var
    menuOpener = ow.lib.id(ow.menuOpener),
    menu = ow.lib.id(ow.menuId),
    isOpen = false,
    cfg = {
      menuOpen: 'open',
      bodyOpen: 'menuopen',
      openHash: '#open'
    };

  if (!menuOpener || !menu || !window.addEventListener || !document.body.classList) return;

  // hamburger
  menuOpener.addEventListener('click', function(e) {

    document.body.classList.toggle(cfg.bodyOpen);
    menu.classList.toggle(cfg.menuOpen);
    isOpen = menu.classList.contains(cfg.menuOpen);
    e.preventDefault();
    e.stopPropagation();

  }, false);


  // deactivate menu on body click
  document.body.addEventListener('click', function(e) {

    if (!isOpen || ow.lib.closest('nav', e.target) === menu) return;

    document.body.classList.remove(cfg.bodyOpen);
    menu.classList.remove(cfg.menuOpen);
    isOpen = false;

  });

})();
