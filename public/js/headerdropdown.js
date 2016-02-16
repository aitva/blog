/**
 * headerdropdown.js contains the HeaderDropDown class.
 * This class control the header navigation switch.
 * author: L. Arod
 * date: 2016-01-31
**/
var HeaderDropDown = function () {
    "use strict";
    let my, that;

    my = {
        nav: document.getElementById('header-nav'),
        button: document.getElementById('header-nav-switch'),
        clickHandler: function () {
            my.nav.classList.toggle('hidden');
        },
    };
    if (!my.nav || !my.button) {
        throw new Error('unable to find required nodes');
    }

    that = {
        init: function () {
            my.nav.classList.add('hidden');
            my.button.classList.remove('hidden');
            my.button.disabled = false;
            my.button.addEventListener('click', my.clickHandler);
        },
        exit: function () {
            my.nav.classList.remove('hidden');
            my.button.classList.add('hidden');
            my.button.disabled = true;
            my.button.removeEventListener('click', my.clickHandler);
        }
    };
    my.nav.classList.remove("nav-nojs");
    my.nav.classList.add("nav-js");

    return that;
}
