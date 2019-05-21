const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATH_SOURCE_PAGE = resolve(__dirname, 'client/pages');
const PATH_SOURCE_SCSS = resolve(__dirname, 'client/scss');

const COMMON_ENTRY = ['@babel/polyfill', 'whatwg-fetch'];
module.exports = {
  entry: {
		index: [...COMMON_ENTRY, PATH_SOURCE_PAGE + '/index/index.js', PATH_SOURCE_SCSS + '/index/index.scss'],
		about: [...COMMON_ENTRY, PATH_SOURCE_PAGE + '/about/index.js', PATH_SOURCE_SCSS + '/about/index.scss'],
		post: [...COMMON_ENTRY, PATH_SOURCE_PAGE + '/post/index.js', PATH_SOURCE_SCSS + '/post/index.scss'],
	},
	output : {
		filename : '[name]/client.bundle.js', // output filename
		path : resolve(__dirname, 'build'), // output path
		publicPath : '/'
	},

	module : {
		rules : [{
			test : /\.jsx?$/,
			exclude : /node_modules/,
			use : {
				loader : 'babel-loader',
				options : {
					presets : ['@babel/preset-env', '@babel/preset-react']
				},
			}
		}, {
			test: /\.s?css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'sass-loader'
			]
		}
		],
	},
	plugins: [
		// 기타 플러그인
		new MiniCssExtractPlugin({ filename: '[name]/[name].css' })
	],
	resolve: {
		extensions: ['.css', '.scss', '.js', '.jsx'],
	},
};
