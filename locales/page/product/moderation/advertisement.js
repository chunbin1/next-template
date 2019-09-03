import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "广告识别",
  slogan: "智能识别图片中的广告信息",
  description:
    "识别广告图片中的字符内容、二维码等信息，辅助人工过滤各类诈骗、微商等广告图片，净化互联网UGC类产品。",
  projectId: "single",
  taskDescId: "56a8645b0c800bff40990cf1",
  applications: [
    {
      title: "视频、直播内容审核",
      description: "可识别出视频、直播中是否有广告图片，辅助审核人员净化平台环境。",
      index: 1
    },
    {
      title: "用户原创内容审核",
      description: "对海量用户原创内容进行审核，快速定位广告内容，帮助UGC网站、App节省审核人力。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "准确率可达99.5%以上，平均复审率低于5%。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "7*24h实时监控，发现广告内容毫秒级响应。",
      index: 2
    },
    {
      title: "快速开发迭代",
      content: "根据不同时期的审核需求快速开发迭代产品，满足不同场景需求。",
      index: 3
    }
  ],
  cases: [
    {
      name: "糗事百科",
      label: "qiubai",
      description: "全自动化过滤违规广告，提升用户体验。",
      link: true
    },
    {
      name: "六间房",
      label: "6rooms",
      description: "实时自动过滤违规广告，减少人力成本。"
    },
    {
      name: "酷狗音乐",
      label: "kugou",
      description: "自动甄别图片内容中的违规广告，净化平台环境。"
    }
  ]
};
