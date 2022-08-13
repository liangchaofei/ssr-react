const path = require('path')
const webpackExternals = require('webpack-node-externals')
module.exports = {
    target: 'node',
    mode: process.env.NODE_ENV === 'production' ? 'production': 'development',
    entry: path.resolve(__dirname,'../src/server.js'),
    output: {
        path: path.resolve(__dirname,'../dist'),
        filename: 'bundle_server.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    externals: [webpackExternals()] // 不会把node_module中的源码打包
}