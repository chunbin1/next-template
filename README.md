## 这是一个 nextjs 服务端渲染的项目模版

#### quick start

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

1. less module --- _.module.less 使用 css module _.less 不使用 css module
2. bundle analizyer 打包分析
3. i18n 内置国际化
4. eslint

后续：

1. redux 支持
2. 打包分割公共部分
3. 支持 antd(已经完成)
4. style 分割

#### 目录说明

/const 存放公共变量 <br>
/static 存放静态资源<br>
/static/locales 国际化 <br>
/next-plugins 存放 next 打包的插件,内置 less moudule 打包插件 <br>

#### 常见问题

##### 使用@解决层级过深的问题

@: 表示根目录

```
import Rc from '@/components/Rc'
```

##### 国际化返回 Object

[参考文档](https://www.i18next.com/translation-function/objects-and-arrays)

```
i18next.t('array', { returnObjects: true });
// -> ['a', 'b', 'c']
```

##### 如何添加国际化

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

#### 注意事项

- 生产环境中 styles.css 是没有添加 hash 的，因为浏览器缓存原因，可能导致第一次渲染后，跳转其他页面没有样式,刷新即可，正式环境中**styles.[hash].css** 会解决这个问题

#### 参考资料：

- [next.js](https://nextjs.org)
- [next-i18next](https://github.com/isaachinman/next-i18next)
