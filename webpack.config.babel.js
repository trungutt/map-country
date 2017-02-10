import path from 'path';
import webpack from 'webpack';


const devtool = 'cheap-module-eval-source-map';
const entry = [
	'webpack-hot-middleware/client',
	'./src/index',
];
const output = {
	path: path.join(__dirname, 'dist'),
	filename: 'bundle.js',
	publicPath: '/static/',
};
const plugins = [
	new webpack.HotModuleReplacementPlugin(),
];
const scriptsLoader = {
	test: /\.js$/,
	loaders: ['react-hot-loader', 'babel-loader'],
	include: path.join(__dirname, 'src'),
};

export default {
	devtool,
	entry,
	output,
	plugins,
	module: {
		loaders: [scriptsLoader],
	},
};
