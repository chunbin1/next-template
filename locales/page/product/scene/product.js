import common from "../common";
export default {
  ...common,
  title: "商品识别",
  slogan: "智能识别商品的信息及其变化情况",
  description:
    "将商品名与图片相匹配创建商品图库，AI自动识别商品的信息及其摆放、变化情况。应用于超市、零售门店的多种场景，有效节省人力成本。",
  applications: [
    {
      title: "货架商品审计",
      description:
        "针对超市、零售门店等零售终端，对于货架进行实时监控，AI自动识别出商品缺货、摆错、摆放不合规等问题，并积累下结构化数据，供客户分析，以优化货架陈列。",
      index: 1
    },
    {
      title: "手拿商品识别",
      description:
        "智能识别出货架前顾客拿到手里的商品信息，同时也可以识别出顾客的属性信息（年龄、性别等），为零售运营者提供对于某商品感兴趣的人群或个人。",
      index: 2
    },
    {
      title: "冷柜商品识别",
      description: "针对冷柜中的场景，提供AI算法，高可靠性的识别出冷柜每层上商品的信息及变化情况。",
      index: 3
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "基于深度学习算法及海量大数据持续迭代，不断优化识别精度。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "毫秒级响应速度，提供7*24h云端稳定服务。",
      index: 2
    },
    {
      title: "快速开发迭代",
      content: "根据需求快速开发迭代产品，满足不同场景下的业务需求。",
      index: 3
    }
  ]
};
