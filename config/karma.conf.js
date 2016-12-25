var webpackConfig = require('./webpack.test');
var karmaSimpleReporterConfig = require('./karma-simple-reporter');

module.exports = function(config) {
    var _config = {
        basePath: '',
        
        frameworks: ['jasmine'],
        
        files: [
            {
                pattern: './config/karma-test-shim.js',
                watched: false
            }
        ],
        
        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },
        
        webpack: webpackConfig,
        
        webpackMiddleware: {
            stats: 'normal'
        },
        
        webpackServer: {
            noInfo: false,
            stats: true
        },
        
        reporters: ['karmaSimpleReporter'],
        specReporter: karmaSimpleReporterConfig,
        
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };
    
    config.set(_config);
};
