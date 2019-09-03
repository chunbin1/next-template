import common from "../common";

export default {
  ...common,
  subType: "image",
  title: "人脸检测",
  slogan: "检测图像中的人脸并标记边框位置",
  description:
    "识别检测图片或视频流中的人脸（支持一至多张人脸），并实时返回人脸所处图片中的坐标信息，标记出边框。人脸检测是所有人脸识别的基础功能。",
  projectId: "single",
  taskDescId: "5673875659a518eb6c2af055",
  applications: [
    {
      title: "客流统计",
      description: "通过检测图像中的人脸，可以实时统计客流量。",
      index: 1
    },
    {
      title: "智能相册",
      description: "自动检测并标记出集体照中的人脸。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "当前图普人脸检测算法准确率可达99.5%以上。",
      index: 1
    },
    {
      title: "适应复杂环境",
      content: "在各类遮挡、光线变化、头部姿态下均有高性能表现。",
      index: 2
    },
    {
      title: "多脸实时检测",
      content: "实时精准追踪图像中所有检出的人脸，不限人脸数量。",
      index: 3
    }
  ]
};
