const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    optimization: {
		splitChunks: {
      		chunks: 'all'
    	}
	},
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
    	host: '0.0.0.0',
        port: 1337,
        disableHostCheck: true,
    	compress: true,
        hot: true
    },
    devtool: false
};