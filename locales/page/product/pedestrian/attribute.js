import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "行人属性",
  slogan: "识别人体静态属性与行为动作",
  description:
    "图普能够进行一系列人体相关的属性分析，识别人体静态属性与行为动作，包括性别、年龄段、服饰风格，衣着颜色、是否抽烟、是否使用手机等，可应用于线下受众分布定位、客群分析、实时广告精准投放等。",
  projectId: "57848caa5d3faff22e895ac9", // combineId的projectId共用，
  taskDescId: "5b83fa8d99dc074606ce7af0",
  applications: [
    {
      title: "广告精准投放",
      description: "实时分析线下客群的人体属性，并据此投放精准匹配的广告信息。",
      index: 1
    },
    {
      title: "客群分析",
      description: "商场、店铺用于分析客群属性，收集用户画像，进行个性化营销，辅助管理决策。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "图普精准的多维度人体属性信息，为您的数据与洞察提供可靠保障。",
      index: 1
    },
    {
      title: "适应复杂环境",
      content: "图普为您提供稳定的高性能表现，适应各种常见影响，如遮挡、光照、人体姿态等。",
      index: 2
    },
    {
      title: "高效稳定处理",
      content: "基于图普领先的深度学习算法，在任何设备上都能极速处理并返回信息。",
      index: 3
    }
  ],
  cases: [
    {
      name: "OPPO",
      label: "oppo",
      description: "打造数据化运营，为顾客带来极致体验。",
      link: true
    },
    {
      name: "爱回收",
      label: "aihuishou",
      description: "为线下开放式门店提供全方位智能管理。",
      link: true
    },
    {
      name: "美的",
      label: "midea",
      description: "定位重点单品目标人群，指导营销策略精准化。",
      link: true
    }
  ]
};
