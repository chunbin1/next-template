import common from "../common";

export default {
  ...common,
  title: "人脸关键点",
  slogan: "精确定位及追踪人脸关键点",
  description:
    "通过106个关键点定位人脸，毫秒级处理速度，关键点包括眼睛、眉毛、嘴巴、鼻子以及人脸轮廓。适应大角度侧脸，部分遮挡，表情变化，明暗变化等各种实际环境。",
  applications: [
    {
      title: "人脸照片处理",
      description: "利用人脸关键点技术，可实现照片中人脸的美颜、贴纸、换脸等创意。",
      index: 1
    },
    {
      title: "视频贴纸与滤镜",
      description: "利用人脸关键点技术，可为视频中的人脸添加滤镜、贴图等效果。",
      index: 2
    }
  ],
  advantage: [
    {
      title: "高效稳定处理",
      content: "毫秒级处理速度，在任意设备上均可快速获取人脸关键点，人眼察觉不到关键点的抖动。",
      index: 1
    },
    {
      title: "多脸实时追踪",
      content: "基于多任务深度神经网络，实时精准追踪图像中所有检出的人脸，不限人脸数量。",
      index: 2
    },
    {
      title: "适应复杂环境",
      content: "无论是在遮挡、抖动状态，还是在明暗变化、表情变化状态，均能快速准确地定位人脸。",
      index: 3
    }
  ]
};
