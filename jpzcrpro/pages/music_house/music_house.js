// music_house/music_house.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
      isSelect:false,
    navbar: 
    [
      { "name": "歌曲", "url":"./music/music"},
      { "name": "排行榜", "url": "./ranking_list/ranking_list" },
      { "name": "作曲人", "url": "./music_author/music_author" },
      { "name": "曲目种类", "url": "./music_category/music_category" }
    ],
    currentTab: 0,
    music_good:
    [
          { "music_name": "该死的温柔", "play": "885万",                            "img_url":"http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg"},
          { "music_name": "该死的温柔", "play": "885万", 
      "img_url":"http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg" },
          { "music_name": "该死的温柔", "play": "885万", 
      "img_url":"http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg" },
          { "music_name": "该死的温柔", "play": "885万", 
       "img_url":"http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg"},
          { "music_name": "该死的温柔", "play": "885万", 
      "img_url":"http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg" }
    ],
    music_link:
    [
        {"music":"该死的温柔","author":"王嘉尔","time":"02:45"},
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" },
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" },
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" },
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" },
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" },
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" },
        { "music": "该死的温柔", "author": "王嘉尔", "time":"02:45" }
    ],
    author:
    [
        { "url": "http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg",        "author_name":"王嘉尔"},
        { "url": "http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg",        "author_name": "王嘉尔" },
        { "url": "http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg",        "author_name": "王嘉尔" },        {"url":"http://192.168.1.28:8080/static/img/login_bg.2628f5f.jpg", "author_name": "王嘉尔" }
    ]
  },
  navbarClick(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})