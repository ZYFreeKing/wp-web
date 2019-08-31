const Webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, './node_modules')
                ],
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //调用webpack的热更新插件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/views/index.html'),
            filename: 'index.html',
            chunks: ['app'],
            hash: true,
            inject: 'body',
        })
    ]
});