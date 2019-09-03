import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "暴恐识别",
  slogan: "智能识别图像中的暴力恐怖内容",
  description:
    "智能识别含有宣扬恐怖主义、极端主义、血腥、政治游行等画面的暴恐及反动内容。暴恐识别模型更为严格，对涉嫌暴恐信息零容忍，为您的产品保驾护航，远离涉暴涉恐风险。",
  projectId: "single",
  taskDescId: "5acb135cc40c6772b10ec73a",
  applications: [
    {
      title: "视频、直播平台监控",
      description: "对直播、视频等抽帧检测，高效识别涉暴涉恐图像，杜绝因暴恐内容带来的运营风险。",
      index: 1
    },
    {
      title: "用户原创内容审核",
      description: "可对用户上传的图像进行审核，避免用户上传暴恐等违规图像。",
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
      content: "7*24h实时监控，发现暴恐内容毫秒级响应。",
      index: 2
    },
    {
      title: "策略灵活调整",
      content: "根据用户审核平台的需求，深度定制产品使用策略与方案。",
      index: 3
    }
  ],
  cases: [
    {
      name: "映客直播",
      label: "inke",
      description: "定制化审核模型，图片复审率低于2%。",
      link: true
    },
    {
      name: "美拍",
      label: "meipai",
      description: "海量内容高效审核，根据需求快速开发迭代产品。"
    },
    {
      name: "来疯",
      label: "laifeng",
      description: "海量图片并发处理，高峰期稳定服务。",
      link: true
    }
  ]
};
