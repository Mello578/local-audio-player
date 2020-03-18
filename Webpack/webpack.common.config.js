require('@babel/register')({ presets: ['@babel/preset-env'] });

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const helpers = require('./helpers.js');

const nodeModules = helpers.root('node_modules');
const src = helpers.root('src');

const tsconfig = require('../tsconfig.json');
const TSConfigFile = helpers.root('tsconfig.json');

const tsPaths = {};
Object.keys(tsconfig.compilerOptions.paths).forEach(t => {
    const value = tsconfig.compilerOptions.paths[t][0];
    tsPaths[t.replace(/\/\*$/g, '')] = helpers.root(value.replace(/\/\*$/g, ''));
});

module.exports = devMode => {
    const publicPath = `${devMode ? 'http://localhost:8081' : ''}/dist`;

    const fileLoaderSettings = {
        name: devMode ? '[name].[ext]' : '[name]-[hash].[ext]',
        publicPath: `${publicPath}/file-loader`,
        outputPath: 'file-loader/'
    };

    return {
        entry: './Entry/index.ts',
        output: {
            filename: devMode ? '[name].js' : '[name]-[hash].js',
            publicPath: publicPath
        },
        resolve: {
            modules: [nodeModules],
            extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
            alias: {
                ...tsPaths
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        ...(devMode ? ['cache-loader'] : []),
                        {
                            loader: 'ts-loader',
                            options: {
                                configFile: TSConfigFile,
                                transpileOnly: true
                            }
                        }
                    ],
                    include: [src]
                },
                {
                    test: /\.jsx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-react', '@babel/preset-env']
                            }
                        }
                    ],
                    include: [src]
                },
                {
                    test: /\.less$/,
                    include: [src],
                    exclude: /module\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        ...(devMode ? ['cache-loader'] : []),
                        {
                            loader: 'css-loader',
                            options: { modules: 'global' }
                        },
                        'less-loader'
                    ]
                },
                {
                    test: /\.less$/,
                    include: /module\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        ...(devMode ? ['cache-loader'] : []),
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: devMode,
                                localsConvention: 'dashes',
                                modules: {
                                    localIdentName: devMode ? '[name]__[local]_[hash:base64:4]' : '[hash:base64]'
                                }
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                keepQuery: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: { modules: 'global' }
                        }
                    ],
                    include: [src, nodeModules]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.mp3$/,
                    loader: 'file-loader'
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                name: 'common',
                filename: devMode ? 'common.js' : 'common-[hash].js'
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: devMode ? 'common.css' : '[name]-[hash].css',
                orderWarning: false
            }),
            new CaseSensitivePathsPlugin()
        ]
    };
};
