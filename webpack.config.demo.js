module.exports = {
    entry: './demo/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/demo/dist',
    },
    devServer: {
        contentBase: 'demo',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
