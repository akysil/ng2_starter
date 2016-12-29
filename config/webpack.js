var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'app': './src/main.ts'
    },
    
    resolve: {
        // extensions for extension-less link
        extensions: ['', '.ts', '.js']
    },
    
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    // Typescript to ES5, guided by the tsconfig.json file
                    'awesome-typescript-loader',
                    // loads angular components' template and styles
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                // exports HTML as string
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                // excludes css within app directory
                exclude: helpers.path('src', 'app'),
                // moves styles to separate bundle
                loader: ExtractTextPlugin.extract(
                    // adds CSS to the DOM by injecting a <style> tag
                    'style',
                    // @import and url(...) are interpreted like require()
                    'css?sourceMap'
                )
            },
            {
                test: /\.css$/,
                // includes component-scoped styles
                include: helpers.path('src', 'app'),
                // loads css as string
                loader: 'raw'
            }
        ]
    },
    
    devtool: 'cheap-module-eval-source-map',
    
    output: {
        path: helpers.path('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    
    plugins: [
        // extract css from js (prepares them for HtmlWebpackPlugin)
        new ExtractTextPlugin('[name].css'),
        
        // inject scripts and styles in html
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: false
        })
    ],
    
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};
