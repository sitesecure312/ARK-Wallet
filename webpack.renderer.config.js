module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ["postcss-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|jp2|webp)$/,
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]'
				}
			}
		],
	},
};
