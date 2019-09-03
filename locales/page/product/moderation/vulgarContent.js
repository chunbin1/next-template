import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "低俗内容识别",
  slogan: "独创低俗内容识别功能，精准过滤视频和图像中的低俗内容",
  description:
    "智能识别视频和图像中的低俗内容，包括危险行为、成瘾行为、性暗示、亚文化等，使直播、视频、UGC 平台具备更多维度的审核能力，有效规避运营风险。",
  applications: [
    {
      title: "视频、直播内容审核",
      description: "对直播、视频等抽帧检测，高效识别低俗内容，杜绝因低俗内容带来的运营风险。",
      index: 1
    },
    {
      title: "用户原创内容审核",
      description: "对海量UGC内容进行审核，快速定位低俗内容，辅助审核人员净化产品内容。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "海量违规样本",
      content: "千亿级样本数据资源积累，海量丰富的违规数据样本内容。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "7*24h实时监控，发现低俗内容毫秒级响应。",
      index: 2
    },
    {
      title: "策略灵活调整",
      content: "根据用户审核平台的需求，深度定制产品使用策略与方案。",
      index: 3
    }
  ]
};
