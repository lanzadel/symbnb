var $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

global.$ = global.jQuery = $;

require('bootstrap');
require('./ad.js');
