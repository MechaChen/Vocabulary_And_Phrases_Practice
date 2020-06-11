const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
    entry: {
        main: resolve('./src/index.tsx')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: ['awesome-typescript-loader?module=es6'],
                exclude: [/node_modules/]
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
                enforce: 'pre'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: !isDevelopment }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: 'file-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        port: 3000,
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}

module.exports = config;
