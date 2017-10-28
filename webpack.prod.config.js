const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const assets = require('./assets.json');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const extractPlugin = new ExtractTextPlugin({
    filename: 'stylesheets/app.[contenthash].css',
    allChunks: true
});
const loaderOptions = new webpack.LoaderOptionsPlugin({
    minimize: true
});
const uglifyJs = new webpack.optimize.UglifyJsPlugin();
const assetsPluginInstance = new AssetsPlugin({filename: 'assets.json'});
const pathsToClean = [
    'public/'+assets.main.css,
    'public/'+assets.main.js
];
const cleanPaths = new CleanWebpackPlugin(pathsToClean, {});
const inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: ['./assets/js/index.js', './assets/sass/app.scss'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'javascripts/app.[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'assets/js'),
                exclude: /(node_modules | routes | views)/,
                query: {
                    presets: ['env']
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                   
                })
            }
        ]
    },
    plugins: [
        cleanPaths,
        extractPlugin,
        loaderOptions,
        uglifyJs,
        assetsPluginInstance
    ],
    stats: {
        colors: true
    }
};