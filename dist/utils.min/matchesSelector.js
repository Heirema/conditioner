!function(a,b){"use strict";var c=null,d=null,e=b?b.body:null;!e||e.matches?d="matches":e.webkitMatchesSelector?d="webkitMatchesSelector":e.mozMatchesSelector?d="mozMatchesSelector":e.msMatchesSelector?d="msMatchesSelector":e.oMatchesSelector&&(d="oMatchesSelector"),c=d?function(a,b){return a[d](b)}:function(a,c){for(var d=(a.parentNode||b).querySelectorAll(c)||[],e=d.length;e--;)if(d[e]==a)return!0;return!1},"undefined"!=typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):a.matchesSelector=c}(window,document);