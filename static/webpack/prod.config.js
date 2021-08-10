const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: "production",
    devtool: 'source-map',

    // entry: ['bootstrap-loader/extractStyles'],

    output: {
        publicPath: 'dist/',
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'},
                {loader: 'postcss-loader'},
                {loader: 'sass-loader'}
            ]
        }],
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
            __DEVELOPMENT__: false,
        }),
        new MiniCssExtractPlugin(),
        new DuplicatePackageCheckerPlugin(),
        new UglifyJsPlugin(),
    ],
};
