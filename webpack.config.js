module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/, loader: 'style!css'
        }, {
            test: /\.less$/, loader: 'style!css!less'
        }, {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: "file-loader?name=dist/[name].[ext]"
　　　　}]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    }
}
