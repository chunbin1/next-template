import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "行驶证识别",
  slogan: "识别机动车行驶证正面的文字",
  description:
    "支持对机动车行驶证正页的所有字段识别，包括号牌号码、车辆类型、所有人、住址、使用性质、品牌型号、车辆识别代号、发动机号码、注册日期、发证日期。",
  projectId: "single",
  taskDescId: "582ec5020f55a84c39ba7e20",
  applications: [
    {
      title: "警务行业信息查询",
      description:
        "警务人员在处理业务时使用行驶证识别技术，可以快速识别目标人员行驶证信息，迅速完成信息录入、查询等操作，助力推进警务行业智能化升级。",
      index: 1
    },
    {
      title: "车主身份认证",
      description:
        "只需拍照即可快速上传本人证件信息，帮助车主快速完成身份认证，降低车主输入成本，被广泛应用于打车、租车、车险投保理赔等业务。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "基于图普海量数据及深度学习算法积累，在各种复杂场景下的识别准确性处于业内领先水平。",
      index: 1
    },
    {
      title: "适应复杂环境",
      content: "在各类异常情况中均有高兼容性表现，例如模糊、倾斜、光照不均、背景杂乱、过曝影响等。",
      index: 2
    },
    {
      title: "使用灵活",
      content: "高度兼容多重文字调用方式，支持公有云调用、SDK定制或私有云部署。",
      index: 3
    }
  ]
};
