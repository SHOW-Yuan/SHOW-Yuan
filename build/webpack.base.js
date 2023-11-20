const path = require('path');
// 添加html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式

module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'), // 入口文件
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
        {
            // include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
            test: /.(ts|tsx)$/, // 匹配.ts .tsx文件
            use: ['thread-loader', 'babel-loader']
        },
        {
            test: /\.(css|scss)$/, //匹配 css 文件
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ],
        },
        {
            test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
            type: "asset", // type选择asset
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024, // 小于10kb转base64位
              }
            },
            generator:{ 
              filename:'static/images/[name].[contenthash:8][ext]', // 文件输出目录和命名
            },
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        inject: true // 自动注入静态资源
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    // 在引入模块时不带文件后缀时，会来该配置数组里面依次添加后缀查找文件。
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  cache: {
    type: 'filesystem', // 使用文件缓存
  },
}
