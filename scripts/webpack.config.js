var path = require("path");

module.exports = {
    context: path.join(process.cwd(), "scripts"),
    progress: true,
    entry: {
        "the-world": "./the-world.ts"
    },
    devtool: "source-map",
    output: {
        filename: "[name].js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }
        ]
    }
}