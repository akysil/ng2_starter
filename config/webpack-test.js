var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',
    
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
                
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.path('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: helpers.path('src', 'app'),
                loader: 'raw'
            }
        ],
        postLoaders: [
            {
                test: /\.ts$/,
                include: helpers.path('src/app'),
                loader: 'istanbul-instrumenter-loader',
                exclude: [/\.(e2e|spec)\.ts$/]
            }
        ]
    }
};