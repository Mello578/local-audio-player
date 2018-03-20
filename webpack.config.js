'use strict';
const ExtractTextPlugin = require ('extract-text-webpack-plugin');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx']
	},
	entry: './src/js/index.jsx',
	output: {
		path:  __dirname + '/dist/js/',
		publicPath: __dirname + '/dist/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx$/,
				loader: 'babel-loader',
				exclude: [/node_modules/, /public/]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
					{
						loader: 'css-loader',
						options: {
							url: false,
							minimize: true
						}
					}
					]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader'
			},
      {
        test: /\.mp3$/,
        //include: SRC,
        loader: 'file-loader'
      }
		]
	},
	plugins: [
		new ExtractTextPlugin('../style/main.css'),
	]
};