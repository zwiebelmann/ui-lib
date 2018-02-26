const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appConfig = require('./app.config');
const isProd = false;

module.exports = {
  entry: './src/app/module.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      "angular": require.resolve('angular')
    }
  },
  cache: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.ts$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/,
            options: {
                reportFiles: [path.join('./src', "**", "*.{ts,js}")],
                useBabel: true,
                useCache: true
            }
        },
        {
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                publicPath: "../../",
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        },
        {
            test: /\.html?$/i,
            loader: "html-loader",
            options: {
                minimize: isProd,
                attrs: [":image-src", ":src"]
            }
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            exclude: /fonts/i,
            loader: "url-loader",
            options:
            {
                limit: 10000,
                name: ["images", "[hash].[ext]"].join("/")
            }
        },
        {
            test: /\.(svg|eot|ttf|woff2?)(\?.*)?(#.*)?$/,
            include: /fonts/i,
            loader: "url-loader",
            options: {
                limit: 10000,
                name: ["fonts", "[hash].[ext]"].join("/")
            }
        },
        {
            test: /\.(txt|xml)$/i,
            loader: "raw-loader"
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: 'app.min.css'
    }),
    new HtmlWebpackPlugin(Object.assign({},
        appConfig,
        {
            hash: true,
            filename: 'index.html',
            template: `!!handlebars-loader!${__dirname}/pages/app.html`,
            inject: false
        }
    ))
  ]
};