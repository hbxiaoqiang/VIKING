const path = require('path');// node 模块包的路径，两个方法拼接 resolve 和 join
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//分离文件，主要css
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
//const jquery = require('jquery');
//import tools from './src/tools.js'

module.exports = {
    // mode: "development",//'development',
    // devtool: 'inline-source-map',
    mode: "production",
    entry: {
        index:'./src/index',
        about_us:'./src/about/about_us',
        vk_honor:'./src/about/vk_honor',
        vk_culture:'./src/about/vk_culture',
        vk_strength:"./src/about/vk_strength",
        service:'./src/service',
        case_list:'./src/case/list',
        detail:'./src/detail/detail',
        news:'./src/news',
        job:'./src/job',
        contact:'./src/contact'
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
        new HtmlWebpackPlugin({
            filename:'about/about_us.html',
            template: './template/about/about_us.html',
            chunks: ['vendor','common','about_us'],
        }),
        new HtmlWebpackPlugin({
            filename:'about/vk_honor.html',
            template: './template/about/vk_honor.html',
            chunks: ['vendor','common','vk_honor'],
        }),
        new HtmlWebpackPlugin({
            filename:'about/vk_culture.html',
            template: './template/about/vk_culture.html',
            chunks: ['vendor','common','vk_culture'],
        }),
        new HtmlWebpackPlugin({
            filename:'about/vk_strength.html',
            template: './template/about/vk_strength.html',
            chunks: ['vendor','common','vk_strength'],
        }),
        new HtmlWebpackPlugin({
            filename:'service.html',
            template: './template/service.html',
            chunks: ['vendor','common','service'],
        }),
        new HtmlWebpackPlugin({
            filename:'case/index.html',
            template: './template/case/index.html',
            chunks: ['vendor','common','case_list'],
        }),
        new HtmlWebpackPlugin({
            filename:'case/detail.html',
            template: './template/case/detail.html',
            chunks: ['vendor','common','detail'],
        }),
        new HtmlWebpackPlugin({
            filename:'news/index.html',
            template: './template/news/index.html',
            chunks: ['vendor','common','news'],
        }),
        new HtmlWebpackPlugin({
            filename:'news/detail.html',
            template: './template/news/detail.html',
            chunks: ['vendor','common','detail'],
        }),
        new HtmlWebpackPlugin({
            filename:'job.html',
            template: './template/job.html',
            chunks: ['vendor','common','job'],
        }),
        new HtmlWebpackPlugin({
            filename:'contact.html',
            template: './template/contact.html',
            chunks: ['vendor','common','contact'],
        }),
        // new HtmlWebpackPlugin({
        //     filename:'about/sum.html',
        //     template: './index.html',
        //     chunks: ['vendor','common','global','sum'],
        // })
    ]
}