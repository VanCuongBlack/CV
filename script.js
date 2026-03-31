(function () {
    'use strict';

    var STORAGE_KEY = 'cv-lang';
    var currentLang = 'en';

    // Helper: get text by language from a {en, vi} object or plain string
    function t(obj) {
        if (!obj) return '';
        if (typeof obj === 'string') return obj;
        return obj[currentLang] || obj.en || '';
    }

    // Helper: escape HTML to prevent XSS
    function esc(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function renderCV() {
        var d = CV_DATA;
        var c = d.header.contact;

        var html = '';

        // Header
        html += '<header class="header">';
        html += '<div class="avatar-placeholder">' + esc(d.header.initials) + '</div>';
        html += '<h1>' + esc(t(d.header.name)) + '</h1>';
        html += '<p class="subtitle">' + esc(t(d.header.title)) + '</p>';
        html += '<div class="contact-info">';
        html += '<span>📧 ' + esc(c.email) + '</span>';
        html += '<span>📱 ' + esc(c.phone) + '</span>';
        html += '<span>📍 ' + esc(t(c.location)) + '</span>';
        html += '<span>🔗 <a href="' + esc(c.github.url) + '" target="_blank" rel="noopener">' + esc(c.github.label) + '</a></span>';
        html += '<span>🔗 <a href="' + esc(c.linkedin.url) + '" target="_blank" rel="noopener">' + esc(c.linkedin.label) + '</a></span>';
        html += '</div></header>';

        // About
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.about.title)) + '</h2>';
        html += '<p>' + esc(t(d.about.content)) + '</p>';
        html += '</section>';

        // Experience
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.experience.title)) + '</h2>';
        for (var i = 0; i < d.experience.items.length; i++) {
            var exp = d.experience.items[i];
            html += '<div class="entry"><div class="entry-header"><div>';
            html += '<h3>' + esc(t(exp.role)) + '</h3>';
            html += '<span class="company">' + esc(exp.company) + '</span>';
            html += '</div>';
            html += '<span class="date">' + esc(t(exp.date)) + '</span>';
            html += '</div><ul>';
            for (var j = 0; j < exp.details.length; j++) {
                html += '<li>' + esc(t(exp.details[j])) + '</li>';
            }
            html += '</ul></div>';
        }
        html += '</section>';

        // Education
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.education.title)) + '</h2>';
        for (var ei = 0; ei < d.education.items.length; ei++) {
            var edu = d.education.items[ei];
            html += '<div class="entry"><div class="entry-header"><div>';
            html += '<h3>' + esc(t(edu.degree)) + '</h3>';
            html += '<span class="company">' + esc(t(edu.school)) + '</span>';
            html += '</div>';
            html += '<span class="date">' + esc(t(edu.date)) + '</span>';
            html += '</div><ul>';
            for (var ej = 0; ej < edu.details.length; ej++) {
                html += '<li>' + esc(t(edu.details[ej])) + '</li>';
            }
            html += '</ul></div>';
        }
        html += '</section>';

        // Skills
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.skills.title)) + '</h2>';
        html += '<div class="skills-grid">';
        for (var si = 0; si < d.skills.categories.length; si++) {
            var cat = d.skills.categories[si];
            html += '<div class="skill-category">';
            html += '<h3>' + esc(t(cat.name)) + '</h3>';
            html += '<div class="tags">';
            for (var st = 0; st < cat.tags.length; st++) {
                html += '<span class="tag">' + esc(cat.tags[st]) + '</span>';
            }
            html += '</div></div>';
        }
        html += '</div></section>';

        // Projects
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.projects.title)) + '</h2>';
        for (var pi = 0; pi < d.projects.items.length; pi++) {
            var proj = d.projects.items[pi];
            html += '<div class="entry"><div class="entry-header"><div>';
            html += '<h3>' + esc(t(proj.name)) + '</h3>';
            html += '</div>';
            html += '<a href="' + esc(proj.link) + '" class="project-link" target="_blank" rel="noopener">GitHub ↗</a>';
            html += '</div>';
            html += '<p>' + esc(t(proj.description)) + '</p>';
            html += '</div>';
        }
        html += '</section>';

        // Certifications
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.certifications.title)) + '</h2>';
        html += '<ul>';
        for (var ci = 0; ci < d.certifications.items.length; ci++) {
            html += '<li>' + esc(t(d.certifications.items[ci])) + '</li>';
        }
        html += '</ul></section>';

        // Languages
        html += '<section class="section">';
        html += '<h2>' + esc(t(d.languages.title)) + '</h2>';
        html += '<ul>';
        for (var li = 0; li < d.languages.items.length; li++) {
            html += '<li>' + esc(t(d.languages.items[li])) + '</li>';
        }
        html += '</ul></section>';

        // Footer
        html += '<footer class="footer">';
        html += '<p>' + esc(t(d.footer.text)) + '</p>';
        html += '</footer>';

        document.getElementById('cv-root').innerHTML = html;
    }

    function switchLang(lang) {
        if (lang !== 'en' && lang !== 'vi') return;
        currentLang = lang;

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
        document.documentElement.lang = lang;

        // Persist preference
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // localStorage not available
        }

        renderCV();
    }

    // Make switchLang available globally for onclick handlers
    window.switchLang = switchLang;

    // On page load, restore saved language preference and render
    document.addEventListener('DOMContentLoaded', function () {
        var saved = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            // localStorage not available
        }

        if (saved === 'vi' || saved === 'en') {
            currentLang = saved;
        }
        switchLang(currentLang);
    });
})();
