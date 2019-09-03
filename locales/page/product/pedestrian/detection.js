import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "行人检测",
  slogan: "检测图像中的人体并标记人体框的位置",
  description:
    "检测图片或视频流中的人体，并实时返回人体所处图像中的坐标信息，标记出边框。人体检测是对人体进行分析和处理的基础，检测出的人体可进行姿态预估，特征提取，属性分析，从而实现行人重识别和跟踪。",
  projectId: "single",
  taskDescId: "58b64b589db629d273ac457a",
  applications: [
    {
      title: "人群监控",
      description:
        "实时反映商场、门店内客流分布，掌握线下动态，实时调整商品陈列和人员排班。实时监控人群密集的公共场所，如车站、地铁站、广场、景区，及时发现人群过密、滞留、混乱等异常情况，保障公共安全。",
      index: 1
    },
    {
      title: "人体追踪",
      description:
        "在视频中对检测到的人体进行追踪，通过运动状态预测和空间预测识别出同一人的轨迹。应用于商场或门店内客流轨迹、动向预测、停留时长，管理人员可通过客流动向调整设施部署及营销策略。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "领先的分析算法与技术实力，实时检测行人位置并进行姿态预估，准确度高达99.8%。",
      index: 1
    },
    {
      title: "适应复杂环境",
      content: "在各类遮挡、光线变化、人体姿态下均有高性能表现。",
      index: 2
    },
    {
      title: "多人实时检测",
      content: "实时精准检测图像中所有检出的人体，不限人体数量。",
      index: 3
    }
  ],
  cases: [
    {
      name: "名创优品",
      label: "miniso",
      description: "为门店快速扩张提供数据化运营支持。",
      link: true
    },
    {
      name: "OPPO",
      label: "oppo",
      description: "打造数据化运营，为顾客带来极致体验。",
      link: true
    },
    {
      name: "绫致时装",
      label: "BESTSELLER",
      description: "定位门店热点区域，提升门店整体坪效。"
    }
  ]
};
