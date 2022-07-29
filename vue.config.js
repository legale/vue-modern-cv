// vue.config.js
module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: '8080',
        hot: true,
        liveReload: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },

    },

    configureWebpack: {},

    publicPath: process.env.NODE_ENV === "production" ? "/vue-modern-cv/" : "/",
    runtimeCompiler: true,

};
