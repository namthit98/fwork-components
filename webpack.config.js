const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";
const isDevServer = process.env.DEV_SERVER === 'true';
const FILENAME = pkg.name + (isProduction ? ".min" : "");

const BANNER = [
  "FWork Component",
  "@version " + pkg.version + " | " + new Date().toDateString(),
  "@author " + pkg.author,
  "@license " + pkg.license,
].join("\n");

const config = {
  entry: ['./src/styles/index.css', "./src/index.ts"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: FILENAME + ".js",
    library: ["fwork", "Component"], // Configuring the library namespace
    libraryTarget: "umd", // Configuring the library target
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [
          isDevServer ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: BANNER,
      entryOnly: true,
    }),
    new MiniCssExtractPlugin({
      filename: `${FILENAME}.css`
    }),
  ],
  externals: {
    react: "React",
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      "@src": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
};
module.exports = config;
