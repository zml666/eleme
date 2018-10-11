
const server_config = require("./server.config");
const webpack_config = require("./webpack.config");



// 全局配置
const config = {
    "webpack_config" : webpack_config,
    "server_config" : server_config
}

module.exports = config;