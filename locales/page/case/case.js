'use strict';

const internetList = [
    {
        label: 'inke',
        order: 0,
        title: '映客直播',
        content: '定制化审核模型，图片复审率低于2％'
    },
    {
        label: 'musically',
        order: 1,
        title: 'musical.ly',
        content: '全球性直播，机器识别依旧维持高稳定性和高准确率'
    },
    {
        label: 'laifeng',
        order: 2,
        title: '来疯',
        content: '海量图片并发处理，高峰期稳定服务'
    },
    {
        label: 'meipai',
        order: 3,
        title: '美拍',
        content: '智能化推荐系统，提升直播点击率'
    },
    {
        label: 'qiubai',
        order: 4,
        title: '糗事百科',
        content: '全自动化过滤违规广告，提升用户体验'
    },
    {
        label: 'joyrun',
        order: 5,
        title: '悦跑圈',
        content: '颠覆颜值识别，“鬼脸大赛”打造社区活动热点'
    },  
]
const biList = [
    {
        label: 'oppo',
        order: 0,
        title: 'OPPO',
        content: '打造数据化运营，为顾客带来极致体验'
    },
    {
        label: 'aihuishou',
        order: 7,
        title: '爱回收',
        content: '为线下开放式门店提供全方位智能管理'
    },
    {
        label: 'miniso',
        order: 8,
        title: '名创优品',
        content: '为线下门店快速扩张提供数据化运营支持'
    },
    {
        label: 'kingee',
        order: 9,
        title: '金一珠宝',
        content: '定位重点单品目标人群，指导营销策略精准化'
    },
    {
        label: 'midea',
        order: 10,
        title: '美的',
        content: '定位重点单品目标人群 指导营销策略精准化'
    },
]

module.exports = {
    caseTitle: '为更多客户提供业务新动力'
    , all: '全部'
    , internet: '互联网'
    , bi: '商业智能'
    , internetList
    , biList
    , allList: internetList.concat(biList).sort(( o1, o2 )=>{return o1.order - o2.order})
}