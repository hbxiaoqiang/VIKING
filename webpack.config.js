const path = require('path');// node 模块包的路径，两个方法拼接 resolve 和 join
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//分离文件，主要css
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
//const jquery = require('jquery');
//import tools from './src/tools.js'

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index:'./src/index'
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        }
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    }
                ],
              },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        publicPath: ''
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 10 // 优先级
                },
                common: {
                    name: "common",
                    test: /\.js$/,
                    minSize: 1024,
                    chunks: "all",
                    priority: 5
                }
            }
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].style.css',
            chunkFilename:'css/[id].style.css'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: './static', to: './static' }
        ]),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './template/index.html',
            chunks: ['vendor','common','index'],
        }),
        // new HtmlWebpackPlugin({
        //     filename:'about/sum.html',
        //     template: './index.html',
        //     chunks: ['vendor','common','global','sum'],
        // })
    ]
}