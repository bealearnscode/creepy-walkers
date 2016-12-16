var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

var isProduction = process.env.NODE_ENV === 'production';

var filename;
var plugins;
var outputPath;

if (isProduction) {
    outputPath = 'build/production/public/js';
    filename = `${packageData.name}.${packageData.version}.min.js`;
    plugins = [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ];
}
else {
    outputPath = 'build/dev/public/js';
    filename = `${packageData.name}.${packageData.version}.js`;
    plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        })
    ];
}


module.exports = {
    entry: path.resolve(__dirname, packageData['main']),
    output: {
        path: path.resolve(__dirname, outputPath),
        filename: filename,
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
        },
      ]
    },
    plugins: plugins
}