# 这是一个 nextjs 服务端渲染的项目模版

## quick start

dev

```
  yarn
  yarn run dev
```

build

```
  yarn run build
```

deploy

```
  yarn run deploy
```

支持以下特性 feature:

1. css module(默认使用less)
2. bundle analizyer 打包分析
3. i18n 内置国际化（做国际化的大项目 = 。 =）
4. eslint

后续：

1. redux 支持
2. 支持 antd(已完成)
3. 增加pm2发布命令

## 什么时候使用
使用服务端渲染主要是为了2点
1. seo
2. 首屏速度

普通的单页应用因为html基本为空，爬虫无法识别，导致seo较差。
如果单纯的需要seo，可以考虑使用预渲染(检测到是爬虫，则先渲染再返回html)
如果两者都需要，那可以使用本框架。

**适用人群**：
- react使用者

**适用场景**：
- 官网类界面

## 目录说明
#### 目录结构
```
.
├── build  // 打包后的文件夹
├── components  // 组件
├── const  // 公共变量
├── i18n.js // 语言配置 默认为中文
├── index.js  // nextjs的入口
├── jsconfig.json 
├── next-plugins // 存放一些next的插件,内置 less moudule 打包插件（在原来官方插件的基础上修改为支持css Module）
├── next.config.js // nextjs的配置
├── node_modules  
├── package-lock.json
├── package.json
├── pages  // 页面
├── server.js  // 服务端程序
├── static  // 存放静态资源
│   ├── images  // 存放图片
│   └── locales // 存放国际化
└── yarn.lock
```

## 特性说明
#### css module
新建index.module.less
```
.te4t{
  color: yellow;
}
```
会以css module的形式打包
而不加module则不使用css module
体验与create-react-app脚手架一致.

#### 打包分析
运行
```
yarn run build:analyze
```
可以进行打包分析

## 常见问题

### 使用@解决层级过深的问题

@: 表示根目录

```
import Rc from '@/components/Rc'
```

#### 如何添加国际化

/page 新建的页面中加入

```
import { i18n, withTranslation } from "@/i18n";

export default withTranslation("yourData")(YPage);
```

在/static/locales 中找到对应语言 例如/en,更多语言参考 next-i18next 新建 yourData.json

```
  "title": "I am a sentence in English."
```

**ps：语言的加载以浏览器为准，按浏览器顺序加载 Accept-Language: am,zh;q=0.9,zh-CN;q=0.8,en;q=0.7 可以自己设置浏览器加载顺序**

#### 国际化返回 Object

[参考文档](https://www.i18next.com/translation-function/objects-and-arrays)

```
i18next.t('array', { returnObjects: true });
// -> ['a', 'b', 'c']
```

## 注意事项

- 生产环境中 styles.css 是没有添加 hash 的，因为浏览器缓存原因，可能导致第一次渲染后，跳转其他页面没有样式,**刷新即可**，正式环境中**styles.[hash].css** 会解决这个问题

## 参考资料：

- [next.js](https://nextjs.org)
- [next-i18next](https://github.com/isaachinman/next-i18next)
