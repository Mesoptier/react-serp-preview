module.exports = {
    entry: './docs/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/docs/dist',
    },
    devServer: {
        contentBase: 'docs',
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
