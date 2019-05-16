 const { resolve } = require('path');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 const PATH_SOURCE = resolve(__dirname, 'client');

 module.exports = {
	 entry: {
		 index: ['@babel/polyfill', PATH_SOURCE + '/pages/index/index.js', PATH_SOURCE + '/scss/index/index.scss'],
		 about: ['@babel/polyfill', PATH_SOURCE + '/pages/about/index.js', PATH_SOURCE + '/scss/about/index.scss'],
	 },
	 output : {
		 filename : '[name]/client.bundle.js', // output filename
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
	 resolve: {
		 extensions: ['.css', '.scss', '.js', '.jsx']
	 },
	 plugins: [
		 // 기타 플러그인
		 new MiniCssExtractPlugin({ filename: '[name]/[name].css' })
	 ]
 };
