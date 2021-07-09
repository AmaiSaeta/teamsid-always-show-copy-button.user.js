// ==UserScript==
// @name     TeamsID always show "copy" button
// @version  1
// @include https://app.teamsid.com/*
// @grant    none
// ==/UserScript==

window.addEventListener('DOMContentLoaded', () => {
  var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
  style.type = 'text/css';
  style.sheet.insertRule(
    `
      .records-elements .field-class .copy-record-field {
        opacity: 1 !important;
        visibility: visible !important;
    `,
    style.sheet.cssRules.length
  );
});
