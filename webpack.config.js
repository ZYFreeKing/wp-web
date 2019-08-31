const Webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(baseConfig, {
    mode: 'development',
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
    devServer:{
        // 设置服务器访问的基本目录
        contentBase:path.join(__dirname,'./dist'), //最好设置成绝对路径
        filename: 'index.html',
        // 设置服务器的ip地址,可以是localhost
        host:'localhost',
        // 设置端口
        port: 3000,
        progress: true,
        // 设置自动拉起浏览器
        open:true,
        hot: true
        // compress: true
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //调用webpack的热更新插件
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/views/index.html'),
            filename: 'index.html',
            chunks: ['app'],
            hash: true,
            inject: true,
        })
    ]
});