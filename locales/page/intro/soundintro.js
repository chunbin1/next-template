// 语音功能介绍页数据
const BASEURL = '/images/intro/sound';

export default {
  bannerTitle: '语音识别',
  bannerContent: '准确、高效、兼容性广的语音识别服务',
  funIntro: [
    {
      title: '一句话语音',
      intro:
        '对时长较短（60s以内）的语音进行识别，实时地返回转译文本，适用于较短的语音交互场景，如语音搜索、指令、消息等',
      img: `${BASEURL}/oneword.png`,
    },
    {
      title: '录音文件识别',
      intro:
        '对用户上传的录音文件进行识别，上传后会在12小时内完成处理并返回转译文本，适用于异步非实时识别音频的场景，如点播音频识别、会议录音记录识别、客服电话录音识别等',
      img: `${BASEURL}/record.png`,
    },
    {
      title: '实时语音识别',
      intro:
        '对不限定时长的音频流进行实时识别，实时转译音频的同时做到智能断句，并能输出每句话的起始与终结位置。适用于音频、视频直播识别、实时会议音频转译等',
      img: `${BASEURL}/live.png`,
    },
  ],

  advantage: [
    [
      {
        title: '识别准确率高',
        img: BASEURL + '/ic_accuracy.png',
        content: '结合传统音频处理以及前沿深度学习的方式打造，准确识别音频内容。',
      },
      {
        title: '智能断句纠错',
        img: BASEURL + '/ic_sentence.svg',
        content: '基于大规模语言模型，智能预测语境并进行断句与纠正文本，使输出文本更合理',
      },
      {
        title: '快速解码预处理',
        img: BASEURL + '/ic_decode.png',
        content: '支持各种数据形式的调用，保持精度的同时加速了识别处理',
      },
    ],
    [
      {
        title: '自定义热词',
        img: BASEURL + '/ic_customization.png',
        content: '支持用户自定义关键词，提高各种场景中的识别准确率',
      },
      {
        title: '适用场景广',
        img: BASEURL + '/ic_adaptive.png',
        content: '支持多种垂直领域，例如社交、UGC、会议场合等',
      },
    ],
  ],

  application: [
    {
      title: '社交聊天',
      content: '用于社交聊天平台，语音内容的审核，过滤涉及色情、低俗、敏感等内容',
      src: BASEURL + '/exp_1.png',
    },
    {
      title: 'UGC社区',
      content: '用于UGC社区，对包含音频的用户内容进行审核，如直播音频、FM电台等',
      src: BASEURL + '/exp_2.png',
    },
    {
      title: '视频直播字幕',
      content: '用于视频及直播平台，根据语音内容自动生成字幕、减少内容创作环节',
      src: BASEURL + '/exp_3.png',
    },
    {
      title: '电话/会议实时转写',
      content: '用于电话记录、会议记录、实时讲语音内容转为文字自动记录',
      src: BASEURL + '/exp_4.png',
    },
    {
      title: '音频数据录入',
      content: '使用于广泛的音频内容转化为文字数据应用，可接入到任何平台应用中',
      src: BASEURL + '/exp_5.png',
    },
  ],
};
