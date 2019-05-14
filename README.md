# webpack笔记

> create at 2019-5-14 23:07:28

## webpack笔记

  > `npm install `会根据webpack下面`package.json`进行安装

  > `const path = require('path')` 获取路径对象

  > `BABEL`插件转换`es6`语法
  
  > `webpack --mode development --watch`一直监听代码，并编译。

  > `webpack --model production`生产模式

  > `development`编译比`production`快

  > `package.json`自定义`scripts`命令

  ```json
  "scripts": {
    "watch": "webpack --mode development --watch",
    "start": "webpack --mode development",
    "deploy": "webpack --mode production"
  }
  ```
  - 执行
    > npm run watch
    
    >npm run start

    > npm run deploy