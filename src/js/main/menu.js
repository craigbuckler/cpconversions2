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
      menuHash: '#' + ow.menuId,
      bodyActive: 'menuactive',
      bodyOpen: 'menuopen'
    };

  if (!menuOpener || !menu || !window.addEventListener || !body.classList) return;

  // menu open/close
  body.addEventListener('click', function(e) {

    var t = e.target;
    if ((isOpen && ow.lib.closest('nav', t) === menu) || (!isOpen && (t.nodeName !== 'A' || t.hash !== cfg.menuHash))) return;

    isOpen = body.classList.toggle(cfg.bodyOpen);
    e.preventDefault();
    e.stopPropagation();

  }, false);


  // activate menu
  body.classList.add(cfg.bodyActive);

})();
