// merges config objects
var webpackMerge = require('webpack-merge');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    
    plugins: [
        // extract css from js (prepares them for HtmlWebpackPlugin)
        new ExtractTextPlugin('[name].css')
    ],
    
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
