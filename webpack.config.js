const { resolve } = require('path');

module.exports = [];

const pages = ['index', 'about'];
for (let key of pages) {
	module.exports.push({
		context : resolve(__dirname, `client/pages/${key}`),
		entry : [
			'@babel/polyfill',
			'./index.js'
		],
		output : {
			filename : `${key}/client.bundle.js`, // output filename
			path : resolve(__dirname, 'build'), // output path
			publicPath : '/'
		},

		module : {
			rules : [
				{
					test : /\.jsx?$/,
					exclude : /node_modules/,
					use : {
						loader : 'babel-loader',
						options : {
							presets : ['@babel/preset-env', '@babel/preset-react']
						},
					}
				}
			],
		}
	});
}
