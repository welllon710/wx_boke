// pages/home/home.js
import { saveUser } from "../../network/wxlogin";
import { pub,read } from "../../network/home";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    todayPub:[],
    todayRead:[],
    index:0
  },
  getUser(e){
    const {userInfo} = e.detail
    wx.setStorageSync('userinfo', userInfo)
    this.setData({
      userinfo:userInfo
    })
    let user = {
      nickname:userInfo.nickName,
      gender:userInfo.gender,
      avatarurl:userInfo.avatarUrl,
      country:userInfo.country,
      openid:wx.getStorageSync('openid')
    }
    saveUser(user).then(res=>{
      console.log(res);
      
    })
  },
  async pub(e){
    const {data} = await pub();
    this.setData({
      todayPub:data.data,
      index:Number(e.detail)
    })
  },
  async record(e){
    console.log('yuedu');
    const {data} = await read();
    this.setData({
      index:Number(e.detail),
      todayRead:data.data
    })
    
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    pub().then(({data})=>{
      this.setData({
        todayPub:data.data
      })
      
    })
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
    console.log('页面显示');
    
    const userinfo = wx.getStorageSync('userinfo')
    this.setData({
      userinfo
    })
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