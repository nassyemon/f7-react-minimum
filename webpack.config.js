// const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const path = require("path");
const argvs = require("yargs").argv;
const history = require("connect-history-api-fallback");
const convert = require("koa-connect");

const devMode = process.env.WEBPACK_SERVE || argvs.mode === "development";

const DEFAULT_PORT = 8080;
const host = process.env.MONACA_SERVER_HOST || argvs.host || "0.0.0.0";
const port = argvs.port || DEFAULT_PORT;
const wss = !!process.env.MONACA_TERMINAL;
const socketPort = port + 1; // it is used for webpack-hot-client

function resolvePath(dir) {
  return path.join(__dirname, dir);
}

const webpackConfig = {
  mode: devMode ? "development" : "production",
  entry: {
    app: ["@babel/polyfill", "./src/main.js"],
  },

  output: {
    path: path.resolve(__dirname, "www"),
    filename: "[name].js",
  },

  optimization: {
    removeAvailableModules: true,
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: true,
    removeEmptyChunks: true,
    providedExports: true,
  },

  resolve: {
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".css",
      ".html",
      ".styl",
    ],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        include: [resolvePath("src")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/react",
                "@babel/preset-env",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-optional-chaining",
                [
                  "babel-plugin-styled-components",
                  {
                    ssr: false,
                  },
                ],
              ].concat(devMode ? ["react-hot-loader/babel"] : []),
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?\S*)?$/,
        loader: "file-loader?name=assets/[name].[hash].[ext]",
      },
      {
        test: /\.styl$/,
        loader: "style!css!postcss!stylus?paths=node_modules",
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          {
            loader: "postcss-loader",
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
    new ProgressBarPlugin(),
  ],

  resolveLoader: {
    modules: ["node_modules"],
  },

  performance: {
    hints: false,
  },
};

// Development mode
if (devMode) {
  webpackConfig.devtool = "eval";

  webpackConfig.serve = {
    port,
    host,
    add: (app /*, middleware, options */) => {
      const historyOptions = {
        rewrites: [{ from: /\/[^.]*$/, to: "/index.html" }],
        rewrites: [{
          from: /\/([^\/]+\.js)$/, to: (context) => {
            return context.match[0];
          }
        }],
      };
      app.use(convert(history(historyOptions)));
    },
    devMiddleware: {
      publicPath: "/",
      stats: {
        colors: true,
        errorDetails: true,
        performance: true,
        source: true,
        warnings: true,
        builtAt: true,
      },
    },
    hotClient: {
      port: socketPort,
      https: wss,
    },
  };

  const devPlugins = [
    new HtmlWebPackPlugin({
      template: "src/public/index.html.ejs",
      chunksSortMode: "dependency",
    }),
  ];

  webpackConfig.plugins = webpackConfig.plugins.concat(devPlugins);
} else {
  // Production mode
  const prodPlugins = [
    new HtmlWebPackPlugin({
      template: "src/public/index.html.ejs",
      chunksSortMode: "dependency",
      externalCSS: ["components/loader.css"],
      externalJS: ["components/loader.js"],
      minify: {
        caseSensitive: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
    }),
  ];
  webpackConfig.plugins = webpackConfig.plugins.concat(prodPlugins);
}

module.exports = webpackConfig;
