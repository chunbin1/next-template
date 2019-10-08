const NextI18Next = require('next-i18next').default

const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: 'en',
  },
  all: {
    // 可以通过子路径采用不同的语言
    en: 'en',
    zh_CN: 'zh-CN',
  },
}

module.exports = new NextI18Next({
  defaultLanguage:'zh-CN', // 默认中文
  otherLanguages: ['en'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
})