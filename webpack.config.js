var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.jsx',
    output: {
        path: path.join(__dirname, '/client/dist'),
        filename: 'bundle.js',
        // publicPath: '/assets'
        publicPath: 'http://localhost:8080' //when setting to test or production this needs to be a folder
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: false,
        proxy: {
            '/api': {
                target: 'http://backend:9000',
                secure: false,
                changeOrigin:true
            },
        },
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunks: false,
        },
        contentBase: path.join(__dirname,'client'),
        compress: true,
        host: "0.0.0.0",
        port: 8080
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/preset-react']
                        }
                    }
                ]
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }, 
                    {
                        loader: 'sass-loader'
                    }

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
            path: path.join(__dirname, 'client/dist'),
            filename: 'index.html'
        })
    ]
}