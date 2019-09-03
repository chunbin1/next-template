import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "自定义违规视频库",
  slogan: "接入图普的违规敏感视频库或自建视频库来过滤违规视频",
  description:
    "建立敏感数据库，追踪数据库中非法传播的图片和视频副本，提供定制化的识别解决方案。可用于防止违规视频传播，以及保护版权视频。",
  applications: [
    {
      title: "网站、App内容审核",
      description: "高效审核网站、App内容，杜绝因违规视频传播带来的运营风险。",
      index: 1
    },
    {
      title: "版权保护",
      description: "实时审核海量用户原创内容，快速识别侵权视频。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "目前准确率可达99.5%以上，基于智能的深度学习算法，准确度还将不断提高。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "7*24h实时监控，发现违规视频毫秒级响应。",
      index: 2
    },
    {
      title: "策略灵活调整",
      content: "根据用户审核平台的需求，深度定制产品使用策略与方案。",
      index: 3
    }
  ]
};
