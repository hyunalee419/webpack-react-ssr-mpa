 const { resolve } = require('path');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');

 const PATH_SOURCE = resolve(__dirname, 'client');

 module.exports = (env, argv) => {
 	return {
		 entry: {
			 vendors: ['@babel/polyfill'],
			 index: PATH_SOURCE + '/pages/index/index.js',
			 about: PATH_SOURCE + '/pages/about/index.js',
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
				 },
				 {
					 test: /\.css$/,
					 use: [
						 MiniCssExtractPlugin.loader,
						 'css-loader'
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
	 }
 };
