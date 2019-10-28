// this is node.js
const path = require('path'); // provided automatically for constructing absolute path
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // path.resolve(__dirname)  is absolute path to this file
        // 'dist' will be the folder where bundle is generated
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map', // generate source maps
    module: {
        rules: [
            {
                test: '/\.js$/',
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: '/\.css$/',
                exclude: '/node_modules/',
                use: [
                    { loader: 'style-loader' }, // injecting css code
                    { loader: 'css-loader', // resolve imports
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]' // name of generated CSS classes in the DOM
                            }
                        }
                    },
                    { loader: 'postcss-loader', // prefix css for other browsers
                        options: {
                            indent: 'postcss',
                            plugins: () => [autoprefixer()]
                        }
                    }
                ]
            }
        ]
    }
};