export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "XXX",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "otBft6gGjheUE3XCnWoYn6nY_f9U",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "PjX0NM5afpnNIwafRnXrYG8OJmS8lEFx8-Fkm-BG2Dg",
      // 所在省份
      province: "浙江",
      // 所在城市
      city: "杭州",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://weathernew.pae.baidu.com/weathernew/pc?query=%E6%B5%99%E6%B1%9F%E6%9D%AD%E5%B7%9E%E5%A4%A9%E6%B0%94&srcid=4982"
    }, 
    {
      name: "老婆1", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://weathernew.pae.baidu.com/weathernew/pc?query=%E6%B5%99%E6%B1%9F%E6%9D%AD%E5%B7%9E%E5%A4%A9%E6%B0%94&srcid=4982"
    }, 
    {
      name: "老婆2",
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "老婆3", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "zjV1glIuCXo4Csr23aXWEio1iP74sZJ7IQEES95lDsg6c4yOU",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "otBft6gGjheUE3XCnWoYn6nY_f9U",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "浙江",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "杭州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "王总", "year": "2002", "date": "10-05"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 每次发送这句话
    {"keyword": "encourage_oneself", contents: "记得买早餐！！"},
    // 每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "水火既济，阴阳相契，育物新民，参天赞地。",
      "欲行还止，徘徊不已，藏玉怀珠，寸心千里。",
      "勿谓说话太沈，泥了就不成真，悟出千般奥妙，方识仙道最神。",
      "止止止，有终有始，似月如花，守成而已。",
      "六牛耕地，垦开无疆，收成结实，盈禀盈仓。"
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "记得买早餐！！"


}
