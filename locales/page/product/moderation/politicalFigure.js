import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "敏感人物识别",
  slogan: "智能识别国家领导人、时政敏感人士头像",
  description: "提供政治人脸识别库，智能识别国家领导人、时政敏感人士头像等政治敏感信息，规避运营风险。",
  projectId: "single", // combineId 共用
  taskDescId: "5b7be1f59b0c77a8c2afb351",
  applications: [
    {
      title: "视频、直播内容审核",
      description: "对直播、视频等抽帧检测，高效识别敏感人物、敏感政治事件场景。",
      index: 1
    },
    {
      title: "用户原创内容审核",
      description: "对海量UGC内容进行审核，快速定位政治敏感内容，确保产品内容质量。",
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
      content: "7*24h实时监控，发现政治人物敏感图像毫秒级响应。",
      index: 2
    },
    {
      title: "紧跟社会热点",
      content: "通过海量的实时数据，快速开发迭代模型，紧跟社会热点问题。",
      index: 3
    }
  ],
  cases: [
    {
      name: "花椒直播",
      label: "huajiao",
      description: "自动甄别敏感人物，降低业务运营风险。"
    },
    {
      name: "六间房",
      label: "6rooms",
      description: "精准识别敏感人物，减轻人工审核压力。"
    },
    {
      name: "喜马拉雅FM",
      label: "ximalaya",
      description: "实时自动审核直播内容，保障产品内容。"
    }
  ]
};
