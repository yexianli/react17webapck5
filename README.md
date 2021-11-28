# 手动搭建的webpack5 react17项目

## 改项目安装
 npm install

 ## 该项目运行
 npm run start

 ## 该项目已有配置
 1. source-map 开发环境配置生产环境没有配置
 2. 配置了less
 3. 引入了antd 如果不需要用可以卸载通过npm uninstall antd
 4. webpack 5 react 17版本
 5. 配置git不提交的文件在.gitingore文件中
 6. 配置了webpack-bundle-analyzer插件运行npm run start 然后打开http://localhost:8888/ 可见视图化打包分析

<!-- ## 想增加的功能点
1. 国际化语言
2. 优化编译速度，通过引入插件
3. 引入文件压缩css
4. 只在开发环境wepack.config 配置source-map
5. 引入环境变量
6. 引入不同环境不同的webpack设置 webpack.dev.js webpack.prod.js
7. 通过cross-env使开发组件拿到环境变量
8. 通过start命令加set NODE_ENV=development语句仅可以让webpack.config.js 拿到process.env.NODE_ENV值除非是electron项目 
9. 配置eslint和premitter收藏了一篇微信文章
10. 配置路由拦截
-->

