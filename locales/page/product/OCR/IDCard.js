import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "身份证识别",
  slogan: "识别二代身份证上正反面的文字",
  description:
    "支持二代身份证正反面所有字段的识别，包括姓名、性别、民族、出生日期、住址、公民身份证号、签发机关、有效期限，并返回结构化的文字结果，提供方便快捷的身份证信息录入体验。",
  projectId: "single",
  taskDescId: "58a6765472afab41d9511da3",
  applications: [
    {
      title: "远程身份认证",
      description:
        "识别客户上传的身份证信息，用于互联网金融、在线旅游、直播等平台的远程身份核实及身份绑定场景，提升审核效率。",
      index: 1
    },
    {
      title: "政务部门身份采集",
      description:
        "使用身份证认证技术可以快速识别用户身份信息，缓解公安、人社、工商等政务部门的办事压力，提升业务办理的效率。",
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
      content: "在各类异常情况中均有高性能表现，例如模糊、倾斜、光照不均、背景杂乱、过曝影响等。",
      index: 2
    },
    {
      title: "使用灵活",
      content: "高度兼容多重文字调用方式，支持公有云调用、SDK定制或私有云部署。",
      index: 3
    }
  ]
};
