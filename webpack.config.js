const HtmlWebPlugin  = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'bundle.[hash].js',
    path:path.resolve(_dirname,'dist'),
  },
  plugins:[
    new HtmlWebPlugin({
      template: './src/index.html',
    })
  ],
  resolve:{
    modules:[_dirname,"src","node_modules"],
    extensions: [ "*",".js","jsx","jsx",".tsx",".ts"],
  },
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        include: /node_modules/,
        loader: require.resolve("babel-loader"),
      },{
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      }
    ]
  }

}
