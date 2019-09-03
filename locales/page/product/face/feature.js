import common from "../common";

export default {
  ...common,
  subType: "image",
  title: "人脸特征分析",
  slogan: "识别图像中的多维度人脸信息，智能分析人群特征",
  description:
    "基于深度学习算法，图普科技可以检测图像中的人脸并进行一系列人脸相关的特征分析，当前支持识别出包括性别、颜值、年龄、表情、人种、风格、是否戴眼镜等多维度人脸信息。可用作基础人脸信息的解析，智能分析人群特征。",
  projectId: "57848caa5d3faff22e895ac9", // combineId的projectId共用，
  taskDescId: "5b8a72f8e1dd0428de6be0ff",
  applications: [
    {
      title: "客流属性识别",
      description: "通过对图像或视频中的人脸特征分析，分析客流的性别、年龄等属性。",
      index: 1
    },
    {
      title: "广告精准投放",
      description: "通过人脸特征分析，可以实时分析受众人群的性别、年龄等特征和分布状况，精准投放广告。",
      index: 2
    },
    {
      title: "线下营销",
      description: "基于人脸特征分析，商场、餐厅等场所可展开颜值测试类的互动营销活动，增加与顾客的互动。",
      index: 3
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "对于日常生活中的人脸，准确率高达 99.5%。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "在 PC、移动设备上均能迅速处理。",
      index: 2
    },
    {
      title: "适应复杂环境",
      content: "在遮挡、光照不佳、头部姿态变化等复杂场景下均具备高性能表现。",
      index: 3
    }
  ],
  cases: [
    {
      name: "美拍",
      label: "meipai",
      description: "智能化推荐系统，提升直播点击率。",
      link: true
    },
    {
      name: "悦跑圈",
      label: "joyrun",
      description: "颠覆颜值识别，“鬼脸大赛”打造社区活动热点。",
      link: true
    },
    {
      name: "名创优品",
      label: "miniso",
      description: "为门店快速扩张提供数据化运营支持。",
      link: true
    }
  ]
};
