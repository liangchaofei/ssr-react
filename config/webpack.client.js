const path = require('path')
module.exports = {
    target: 'web',
    mode: process.env.NODE_ENV === 'production' ? 'production': 'development',
    entry: path.resolve(__dirname,'../src/client.js'),
    output: {
        path: path.resolve(__dirname,'../dist/public'),
        filename: 'bundle_client.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}