const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports={
    mode: 'development',
    entry:{
       bundle: path.resolve(__dirname , 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
       // filename: 'bundle.js', //for single entry file use
        filename: '[name].js', //for multipoll entry file use
        clean:true,
        assetModuleFilename:'[name][ext]',
        //assetModuleFilename: 'asset/[hash][ext][query]'
      },
      devtool:'source-map',
      devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open:true,
        hot:true,
        historyApiFallback:true
      },

      module:{
        rules:[
            {
              test: /\.scss$/,
              use:[
                { loader: 'style-loader' },
                { loader: 'css-loader',},
                { loader: 'sass-loader' }
              ],
            },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
               
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
              test:/\.(png|jpg|jpeg|svg|gif)$/i,
              type: 'asset/resource',
              
            }
        ]
      },

      plugins: [new HtmlWebpackPlugin({
        title:'webpack App',
        filename:'index.html',
        template: 'src/test.html',

      })],
}