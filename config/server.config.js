const proxy = require("http-proxy-middleware");
// 配置webserver
const server_config = {
    host : "localhost",
    port : "8080",
    livereload : true,
    middleware : [
        proxy('/api',{
            target:'http://localhost:3000',
            changeOrigin: true,
        })
    ]
}

module.exports = server_config;