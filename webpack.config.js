const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        entry: './src/index.js',
        mode: 'development',
        watch: true,
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? "production" : "development"
                        }
                    }
                },
                {
                    test: /\.tsx?$/, 
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                inject: true
            }),
            new CompressionPlugin({algorithm: "gzip"})
        ].filter(Boolean),
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            hot: true,
        }
    };
};
