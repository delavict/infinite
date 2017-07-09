var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "infinite.bundle.css",
    disable: true//process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader", options: {
                  sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                  sourceMap: true
                }
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractSass
  ]
};
