import common from "../common";
export default {
  ...common,
  title: "自定义人脸搜索",
  slogan: "在人脸库中搜索相似的人脸",
  description:
    "精确搜索匹配在预设人脸库中的相似人脸，将一张人脸和 N 张人脸进行比对，找出最相似的一张或多张人脸，即 1:N 人脸搜索。可用作人脸签到、人脸门禁、人员信息查询、安防监控等应用场景。",
  applications: [
    {
      title: "刷脸签到",
      description: "为企业提供员工刷脸签到考勤服务，提升管理效率和员工体验。",
      index: 1
    },
    {
      title: "安防监控",
      description: "检测监控中的人脸并在预置的数据库中进行检索，用于身份甄别、侦查破案、服务民生等各项业务。",
      index: 2
    },
    {
      title: "刷脸门禁",
      description: "识别访客的人脸图像后在身份照片库中进行搜索，以便确认访客是否具有进入权限。",
      index: 3
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "当前图普人脸识别算法准确率可达99.5%以上。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "单机支持在亿级人脸集合上进行秒级运算。",
      index: 2
    },
    {
      title: "适应复杂环境",
      content: "在各类遮挡、光线变化、头部姿态下均有高性能表现。",
      index: 3
    }
  ]
};
