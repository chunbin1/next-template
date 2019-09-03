import common from "../common";
export default {
  ...common,
  subType: "text",
  title: "文本审核",
  slogan: "审核文本内容是否涉及违规或低俗",
  description: "识别 UGC 业务场景中出现的色情、涉政、暴恐、敏感、广告、灌水等违法低质的文本内容。",
  projectId: "single",
  taskDescId: "57c4036c557603652aeeb222",
  textHint: {
    text: "在线体验仅呈现部分效果，定制优化后效果更佳。请联系我们，享受一对一定制服务。",
    select: "随机文本",
    start: "开始检测"
  },
  applications: [
    {
      title: "视频、直播弹幕审核",
      description:
        "对视频、直播的弹幕进行审核，快速过滤色情、暴恐、敏感、广告等违法低质的弹幕，有效杜绝产品运营风险。",
      index: 1
    },
    {
      title: "用户原创内容审核",
      description:
        "对海量的用户原创文本内容进行审核，快速定位违法低质的文本信息，确保产品内容质量可控，帮助 UGC 平台节省审核人力。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "基于图普海量违规文本数据及自然语言算法积累，在各种复杂场景下的识别准确性业内领先。",
      index: 1
    },
    {
      title: "高自由定制方案",
      content: "结合用户业务场景的违规数据，除自定义违规内容外，还能融合算法深度开发，提供专属过滤方案。",
      index: 2
    },
    {
      title: "轻量低成本接入试用",
      content: "以接口形式提供服务并自带审核运营平台，超低接入成本，无需自建相应服务，轻松完成审核。",
      index: 3
    }
  ]
};
