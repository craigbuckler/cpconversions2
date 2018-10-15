/*
	menu handler

	// requires: lib.js
*/
/* global ow */
(function() {

  'use strict';

  var
    body = document.body,
    menuOpener = ow.lib.id(ow.menuOpener),
    menu = ow.lib.id(ow.menuId),
    isOpen = false,
    cfg = {
      bodyActive: 'menuactive',
      bodyOpen: 'menuopen'
    };

  if (!menuOpener || !menu || !window.addEventListener || !body.classList) return;

  // hamburger
  menuOpener.addEventListener('click', function(e) {

    isOpen = body.classList.toggle(cfg.bodyOpen);
    e.preventDefault();
    e.stopPropagation();

  }, false);


  // deactivate menu on body click
  body.addEventListener('click', function(e) {

    if (!isOpen || ow.lib.closest('nav', e.target) === menu) return;

    body.classList.remove(cfg.bodyOpen);
    isOpen = false;
    e.preventDefault();

  });


  // activate menu
  body.classList.add(cfg.bodyActive);


})();
