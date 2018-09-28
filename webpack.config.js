const path = require('path');

const webpack = require('webpack');

process.env.NODE_ENV="production";

module.exports = {
  entry: './src/index.jsx',

  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'MindMap',
    publicPath: '/dist/',      
    umdNamedDefine: true  
  },

  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },

  resolve: {
    alias: { d3: path.resolve(__dirname, 'dist/d3.min.js'),    'react': path.resolve(__dirname, './node_modules/react'),
    'react-dom': path.resolve(__dirname, './node_modules/react-dom') },

  },

  plugins: [
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV||'production')
        }
    }),
],
externals: {      
  // Don't bundle react or react-dom 
  d3: {          
    commonjs: "d3",          
    commonjs2: "d3",          
    amd: "d3",          
    root: "d3"      
},           
  react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
  },      
  "react-dom": {          
      commonjs: "react-dom",          
      commonjs2: "react-dom",          
      amd: "ReactDOM",          
      root: "ReactDOM"      
  }  
} 
};
