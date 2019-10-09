## 这是一个nextjs服务端渲染的项目模版

#### quick start

```
  yarn
  yarn run dev
```
build
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
  2. 打包分割公共部分
  3. 支持antd(已经完成)
  4. style分割

#### 目录说明
/const 存放公共变量 <br>
/static 存放静态资源<br> 
/static/locales国际化 <br>
/next-plugins 存放next打包的插件,内置less moudule打包插件 <br>

#### 常见问题
##### 使用@解决层级过深的问题
@: 表示根目录
```
import Rc from '@/components/Rc'
```
##### 国际化返回Object
[参考文档](https://www.i18next.com/translation-function/objects-and-arrays)
```
i18next.t('array', { returnObjects: true });
// -> ['a', 'b', 'c']
```

#### 注意事项
- 生产环境中 styles.css 是没有添加hash的，因为浏览器缓存原因，可能导致第一次渲染后，跳转其他页面没有样式,刷新即可，正式环境中**styles.[hash].css** 会解决这个问题

#### 参考资料：
- [next.js](https://nextjs.org)
- [next-i18next](https://github.com/isaachinman/next-i18next)