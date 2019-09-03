import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "汽车识别",
  slogan: "智能识别车辆型号、车标品牌、车身颜色等信息",
  description:
    "基于深度学习的新一代车辆识别引擎，可识别10种细分车型，上百种车标品牌，12种颜色，让企业级用户和直接业务部门可以快速应用更好的车辆识别技术。",
  projectId: "57848caa5d3faff22e895ac9", // combineId的projectId共用，
  taskDescId: "5b6010e4ad14632598c822a1",
  applications: [
    {
      title: "车辆信息结构化",
      description:
        "通过汽车识别技术结构化车辆信息数据，可用于道路管理、停车场管理等场景的车辆数据检索及信息挖掘。",
      index: 1
    },
    {
      title: "拍车识款智能助手",
      description: "汽车识别技术可辅助识别随拍车辆的属性信息，应用于消费者推销及宣传场景。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "基于深度学习算法及海量大数据持续迭代，不断优化识别精度。",
      index: 1
    },
    {
      title: "适用多种场景",
      content: "对于街拍图片、出入口、道路卡口的监控图像均具有优质的识别效果。",
      index: 2
    },
    {
      title: "高效稳定处理",
      content: "毫秒级响应速度，并在实际场景中不断优化性能表现。",
      index: 3
    }
  ]
};
