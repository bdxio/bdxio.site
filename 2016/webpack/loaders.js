module.exports = [
    {test: /\.ts(x?)$/, loader: 'ts-loader'},
    {
        test: /\.css$/,
        loaders: ['style', 'css', 'resolve-url']
    },
    {
        test: /\.scss$/,
        loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    }, {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
    }
];
