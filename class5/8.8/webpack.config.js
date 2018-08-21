console.log(process.env.NODE_ENV)
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  // output은 인터넷 보고 따라한거임
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              // limit: 1200,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'assets')
    ]
    // publicPath: '/blog/'
  }
}
