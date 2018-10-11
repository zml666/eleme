
module.exports = {
    mode : "production",
    entry: {
        app : "./src/js/app.js"
    },
    output: {
        filename: '[name].js',
    },
    module: {
        rules: [ //在这里通过配置规则使用loader
            {
                test : /\.html$/,
                use : "string-loader"
            }
        ]
    }
};
