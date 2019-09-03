import common from "../common";
export default {
  ...common,
  title: "人脸对比",
  slogan: "验证两张脸是否属于同一个人，并给出置信度评分",
  description:
    "通过提取人脸特征将两张人脸进行比对来判断是否是同一个人，并给出置信度评分，即 1:1 身份验证。人脸对比技术在一定范围内兼容年龄、化妆或其他容貌改变的情况，被广泛用于基于人脸的用户身份认证以及人证合一验证。",
  applications: [
    {
      title: "用户身份认证",
      description:
        "通过人脸对比技术对比实拍图像与底图是否为同一人，被广泛应用于银行、证券、保险、互联网金融等场景的刷脸登录及远程身份认证。",
      index: 1
    },
    {
      title: "人证合一验证",
      description:
        "自动将人脸照片与证件照片进行对比，包括身份证、驾驶证、护照等，被广泛应用于各类安保场景之中，提升安保的工作效率及准确度。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "当前图普人脸对比算法在国际权威的LFW无限制条件下人脸验证测试中达到99.987%的准确率。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "毫秒级别极速处理并返回结果，满足各行业的业务需求。",
      index: 2
    },
    {
      title: "安全可靠",
      content: "先进的活体检测技术，有效抵御屏幕翻拍、合成照片、人头模型等攻击。",
      index: 3
    }
  ]
};
