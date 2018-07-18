var path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "./src/index.ts"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
        pathinfo: true
    },
    devtool: 'source-map',
    resolve:{
        extensions:['.ts','.js']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,loader:"ts-loader"
            }
        ]
    }
};