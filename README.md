## 这是一个nextjs服务端渲染的项目模版

#### quick start

```
  yarn
  yarn run dev
```
build and deploy
```
  yarn run build
```

支持以下特性 feature:
  1. less module --- *.module.less使用css module *.less不使用css module
  2. bundle analizyer 打包分析 
  3. i18n 内置国际化
  4. eslint

后续：
  1. redux支持

#### 目录说明
/const 存放公共变量
/static 存放静态资源 /static/locales国际化
/next-plugins 存放next打包的插件,内置less moudule打包插件

#### 参考资料：
- [next.js](https://nextjs.org)
- [next-i18next](https://github.com/isaachinman/next-i18next)