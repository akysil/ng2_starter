'use strict';
// var fallback = require('connect-history-api-fallback');
// var log = require('connect-logger');

module.exports = {
    port: 3000,
    injectChanges: false, // workaround for Angular 2 styleUrls loading
    files: ['./**/*.{html,css,js,ts}'],
    server: {
        baseDir: [
            './src',
            './node_modules'],
        directory: true,
        // middleware: [
        //     log({format: '%date %status %method %url'}),
        //     fallback({
        //         htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] // systemjs workaround
        //     })
        // ]
    }
};