
module.exports = {
    mode : "production",
    entry: {
        app : "./src/js/app.js",
        login:"./src/js/login.js"
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [ //在这里通过配置规则使用loader
            {
                test : /\.html$/,
                use : "string-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 代表不包括哪些
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
};
