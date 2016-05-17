/**
 * Created by choehanmin on 2016. 4. 27..
 */

//require함수로 임포트한 모듈들은 const 제한자로 수정을 막는 것이 좋다.
const webpack = require('webpack');
const path = require('path');
const includes = require('array-includes');
const extend = require('extend');

const DEBUG = !includes(process.argv,'--release');
const VERBOSE = includes(process.argv,'--verbose');
// const AUTOPREFIXER_BROWSERS = [
//     'Android 2.3',
//     'Android >= 4',
//     'Chrome >= 35',
//     'Firefox >= 31',
//     'Explorer >= 9',
//     'iOS >= 7',
//     'Opera >= 12',
//     'Safari >= 7.1',
// ];
//


const PATHS = {
    build:path.resolve(__dirname,'../build'),
    src:path.resolve(__dirname,'../src')
};

const PORT = 3000;

const config = {
    context: PATHS.src,
    entry:'../index.js',
    output: {
        path: PATHS.build,
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: PORT
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude:'/node_modules/',
                // include: [
                    // path.resolve(__dirname, '../node_modules/react-routing/src'),
                    // PATHS.src,
                  // path.resolve(__dirname,'../')
                // ],
                query: {
                    babelrc: false,
                    presets: [
                        'react',
                        'es2015',
                        'stage-1',
                    ],
                    cacheDirectory: true,
                },
            },
            {
                test: /\.scss$/,
                loaders: [
                    'isomorphic-style-loader',
                    `css-loader?${JSON.stringify({
                        sourceMap: DEBUG,

                        // CSS Modules https://github.com/css-modules/css-modules
                        modules: true,
                        localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',

                        // CSS Nano http://cssnano.co/options/
                        minimize: !DEBUG,
                    })}`,
                    'postcss-loader?parser=postcss-scss',
                ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader',
                query: {
                    name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
                    limit: 10000,
                },
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
                query: {
                    name: DEBUG ? '[path][name].[ext]?[hash]' : '[hash].[ext]',
                },
            },
            {
                test: /\.jade$/,
                loader: 'jade-loader',
            },
        ],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ]
}

module.exports = config;