#第一部分 基础插件的安装#
===================================
##安装##
* 添加时less的版本2.7.3
* react-router-dom axios less less-loader
* yarn eject暴露配置文件webpack.config.dev.js，添加支持less的loader
```
{
  test: /\.less$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
    //添加下面的部分
    {
      loader:require.resolve("less-loader")
    }
    //end
  ],
},
```
* 之后重启之后生效
#统一使用入口配置antd,在webpack.config.dev.js中js部分
```
plugins:[  
['import',[{libraryName:'antd',style:true}]]],
```
注意如果报了less文件的错误，是因为版本太高，需降低版本less如2.7.3
