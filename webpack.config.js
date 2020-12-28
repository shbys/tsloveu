module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: { filename: "index.js" },
    resolve: { 
        extensions: [".ts", ".js"],
        fallback: {
            "constants": false,
            "stream": false,
            "assert": false,
            "util": false
        }
    },
    module: {
        rules: [
            { test: /\.ts/, use: "ts-loader", exclude: /node_modules/ }
        ]
    }
};
