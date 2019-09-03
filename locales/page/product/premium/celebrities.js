import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "明星人物识别",
  slogan: "智能识别直播、视频、UGC内容里的明星头像",
  description: "提供明星人脸识别库，智能识别直播、视频、UGC内容里的明星头像，规避运营风险。",
  projectId: "57848caa5d3faff22e895ac9", // combineId的projectId共用，
  taskDescId: "5af3fc44c94e34a5aa5b443d",
  applications: [
    {
      title: "内容审核",
      description: "对直播、视频及海量UGC内容等进行审核，高效识别明星人物，规避侵权风险。",
      index: 1
    },
    {
      title: "营销活动",
      description: "利用明星人物识别功能，开发测试明星脸指数的趣味营销活动。",
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
      content: "7*24h实时监控，发现在库明星人物图像毫秒级响应。",
      index: 2
    },
    {
      title: "策略灵活调整",
      content: "根据用户审核平台的需求，深度定制产品使用策略与方案。",
      index: 3
    }
  ]
};
