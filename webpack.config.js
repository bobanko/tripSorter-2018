const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "[name].[hash].js"
  },
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 12000
            }
          }
        ]
      },

      {
        test: /\.scss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader" }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*"]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      baseUrl: devMode ? "/" : "https://bobanko.github.io/tripSorter-2017/dist/"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],

  devServer: {
    //host: 'localhost', //default
    //port: 8080, //default
    //port: 9000
    contentBase: "./dist",
    historyApiFallback: true
    //compress: true,
    //hot: true
  }
};
