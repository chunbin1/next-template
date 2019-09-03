import common from "../common";
export default {
  ...common,
  subType: "image",
  title: "智能鉴黄",
  slogan: "精准鉴别图像中的涉黄内容，规避运营风险",
  description:
    "基于深度学习的图像鉴黄技术，精准识别图片及视频中的涉黄内容。准确度超过99.5%，平均复审率低于5%，随着样本模型调优和数据集再训练，准确度还将不断提高。",
  projectId: "54bcfc31329af61034f7c2f8",
  taskDescId: "54bcfc6c329af61034f7c2fc",
  applications: [
    {
      title: "视频、直播平台监控",
      description:
        "对直播、视频等抽帧检测，快速定位涉黄图像，快速杜绝产品涉黄风险，有效节省 95% 以上的审核人力。",
      index: 1
    },
    {
      title: "用户原创内容审核",
      description:
        "对海量UGC（用户原创内容）图像进行审核，快速定位涉黄图像，确保产品内容质量可控，帮助UGC网站、App节省审核人力。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "超高准确度",
      content: "准确率可达99.5%以上，平均复审率低于5%。",
      index: 1
    },
    {
      title: "高效稳定处理",
      content: "7*24h实时监控，发现色情内容毫秒级响应。",
      index: 2
    },
    {
      title: "海量违规样本",
      content: "千亿级样本数据资源积累，海量丰富的违规数据样本内容。",
      index: 3
    }
  ],
  cases: [
    {
      name: "映客直播",
      label: "inke",
      description: "定制化审核模型，图片复审率低于2%。",
      link: true
    },
    {
      name: "musical.ly",
      label: "musically",
      description: "全球性直播，机器识别依旧维持高稳定性和高准确性。",
      link: true
    },
    {
      name: "来疯",
      label: "laifeng",
      description: "海量图片并发处理，高峰期稳定服务。",
      link: true
    }
  ]
};
