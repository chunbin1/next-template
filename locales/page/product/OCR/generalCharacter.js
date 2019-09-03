import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "通用文字识别",
  slogan: "识别图片中的所有文字信息",
  description:
    "识别图片中的文字信息并返回文字位置及其内容信息，可用于用户原创内容的图像文字信息提取、文档文字信息提取等。",
  projectId: "57848caa5d3faff22e895ac9", // combineId的projectId共用，
  taskDescId: "578c7756fbbf7b8a6d92892a",
  applications: [
    {
      title: "资料结构化整理",
      description: "支持笔记、书籍、档案等印刷资料的自动识别，节省人力成本，提升处理效率。",
      index: 1
    },
    {
      title: "单据识别",
      description: "用于银行、医疗等行业的票据识别，返回结构化文字内容与位置，减少人工输入过程。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "基于图普海量数据及深度学习算法积累，在各种复杂场景下的识别准确性处于业内领先水平。",
      index: 1
    },
    {
      title: "适应复杂环境",
      content: "在各类异常情况中均有高兼容性表现，例如模糊、倾斜、光照不均、背景杂乱、过曝影响等。",
      index: 2
    },
    {
      title: "使用灵活",
      content: "高度兼容多重文字调用方式，支持公有云调用、SDK定制或私有云部署。",
      index: 3
    }
  ]
};
