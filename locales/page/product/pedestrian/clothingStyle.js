import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "服饰风格",
  slogan: "精准识别图片和视频中的服饰属性",
  description:
    "自动检测和识别图片、视频中的服饰，准确识别服饰品类、风格，美观度等特征，领先的柔性物体识别技术，显著抵抗光照与姿态变化等干扰因素的影响。",
  projectId: "single",
  taskDescId: "5996b5e797257ac6c32fed57",
  applications: [
    {
      title: "电商搜索同款",
      description: "识别用户上传照片中的服饰，自动为用户推荐同款商品，提升用户体验。",
      index: 1
    },
    {
      title: "电商内容推荐",
      description: "识别用户浏览照片中服饰，自动为用户推荐相似商品，提高消费转化率。",
      index: 2
    },
    {
      title: "辅助行人聚类 ",
      description: "通过识别行人服饰属性，辅助行人聚类，提升行人识别准确率。",
      index: 3
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "柔性物体识别技术、识别准确率行业领先。",
      index: 1
    },
    {
      title: "适应复杂环境",
      content: "在光照变化、姿态变化等情况下均有出色表现。",
      index: 2
    },
    {
      title: "快速开发迭代",
      content: "根据不同时期的审核需求快速开发迭代产品，满足不同场景需求。",
      index: 3
    }
  ]
};
