const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle-[name]-[hash:5].js',
    },
    devServer: {
        contentBase: path.join(__dirname, './src'),
    },
    resolve:{
        alias:{
            '@':path.resolve('src'),
            '@@':path.resolve('src/pages'),
        },
        extensions:['.js','.jsx']
    },
    //加载器
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-react'],
                    //     plugins:[
                    //         ["import", {
                    //           "libraryName": "antd",
                    //           "libraryDirectory": "es",
                    //           "style": "css" 
                    //         }],
                    //         ['@babel/plugin-proposal-decorators',{legacy: true}],
                    //         ['@babel/plugin-proposal-class-properties',{loose:true}]
                    //     ]
                    // }
                },
                include: path.resolve(__dirname, './src')
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: '../dist/img/[name].[hash:7].[ext]'
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
         // 删除dist文件夹
         new CleanWebpackPlugin(),

         // 创建dist文件
         new HtmlWebpackPlugin({
             template:'./src/template.html',
             // filename:'index.html'
         })
    ]
}