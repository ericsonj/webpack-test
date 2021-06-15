const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader"
                    ]
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
            new CompressionPlugin({ algorithm: "gzip" }),
            (isProduction &&
            new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].css",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
            }))
        ].filter(Boolean),
        devServer: {
            contentBase: path.resolve(__dirname, './dist'),
            hot: true,
        }
    };
};
