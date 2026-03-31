(function () {
    'use strict';

    var STORAGE_KEY = 'cv-lang';

    function switchLang(lang) {
        var elements = document.querySelectorAll('[data-en][data-vi]');
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            var text = el.getAttribute('data-' + lang);
            if (text) {
                el.textContent = text;
            }
        }

        // Update active button
        var buttons = document.querySelectorAll('.lang-btn');
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        var activeBtn = document.getElementById('btn-' + lang);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Update html lang attribute
        document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';

        // Persist preference
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // localStorage not available
        }
    }

    // Make switchLang available globally for onclick handlers
    window.switchLang = switchLang;

    // On page load, restore saved language preference
    document.addEventListener('DOMContentLoaded', function () {
        var saved = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            // localStorage not available
        }

        if (saved === 'vi' || saved === 'en') {
            switchLang(saved);
        }
    });
})();
