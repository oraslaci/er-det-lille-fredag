const { VueLoaderPlugin } = require("vue-loader");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const path = require("path");
const commonConfig = {
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  entry: "./src/main.js",
  mode: "development",
  module: {
    rules: [
      // ... other rules
      {
        test: /\.svg$/,
        use: ["babel-loader", "vue-svg-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.sass$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new VuetifyLoaderPlugin()],
};
module.exports = [
  merge(commonConfig, {
    mode: "production",
    output: {
      filename: "isItLittleFriday.bundle.js",
      library: "isItLittleFriday",
      libraryExport: "default",
      libraryTarget: "umd",
    },
  }),
  merge(commonConfig, {
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000
    },
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "isItLittleFriday.bundle.js",
      library: "isItLittleFriday",
      libraryExport: "default",
      libraryTarget: "umd",
    },
  }),
];
