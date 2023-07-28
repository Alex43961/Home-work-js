const path = require("path");
// const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    entry: {
        main :"./index.ts",
        table: "./app.ts",
        end: "./index2.ts"
    },
    watch: true,
    module: {
        rules: [
          {
            test: /\.ts$/, use :['ts-loader']
          },
          {
            test: /\.less$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "less-loader",
                options: {
                  implementation: require("less"),
                },
              },
            ],
          },
        ],
      },
      resolve: {
        extensions: [ '.ts', '.js'],
      },
    output: {
        filename: "[name]_bundle_[contenthash].js",
        path : path.resolve(__dirname, "dist"),
    },
    plugins: [
        // new HTMLWebpackPlugin({
        //     template: "./index.html"
        // }),
        new CleanWebpackPlugin()
    ]
};