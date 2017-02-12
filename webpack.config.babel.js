import path from 'path';
import webpack from 'webpack';

const devtool = 'inline-source-map';
const entry = [
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server',
	path.join(__dirname, 'src/index'),
];
const output = {
	path: __dirname,
	filename: 'bundle.js',
	publicPath: '/',
};
const devServer = {
	contentBase: path.resolve(__dirname, 'src'),
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: false,
		timings: false,
		chunks: false,
		chunkModules: false,
	},
};
const scriptLoader = {
	loader: 'babel-loader',
	include: path.resolve(__dirname, 'src'),
	exclude: /node_modules/,
	test: /\.jsx$|\.js$/,
};
const cssLoaders = {
	loaders: ['style-loader', 'css-loader'],
	include: __dirname,
	test: /\.css$|\.scss$/,
};
const fontLoader = {
	loaders: ['url-loader'],
	test: /\.png$/,
};
const plugins = [new webpack.HotModuleReplacementPlugin()];
const resolve = {
	extensions: ['.js', '.jsx', '.css'],
	alias: {
		leaflet_css: path.join(__dirname, './node_modules/leaflet/dist/leaflet.css'),
	},
};

export default {
	devtool,
	entry,
	output,
	devServer,
	module: {
		loaders: [
			scriptLoader,
			cssLoaders,
			fontLoader,
		],
	},
	plugins,
	resolve,
};
