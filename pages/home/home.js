// pages/home/home.js
import { saveUser } from "../../network/wxlogin";
import { pub,read } from "../../network/home";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:wx.getStorageSync('userinfo')||[],
    todayPub:[],
    todayRead:[],
    index:0
  },
  getUser(e){
     const {userInfo} = e.detail
    // wx.setStorageSync('userinfo', userInfo)
    // this.setData({
    //   userinfo:userInfo
    // })
    let user = {
      nickname:userInfo.nickName,
      gender:userInfo.gender,
      avatarurl:userInfo.avatarUrl,
      country:userInfo.country,
      openid:wx.getStorageSync('openid')
    }
    saveUser(user).then(res=>{
      this.setData({
        userinfo:res.data.data
      })
      wx.setStorageSync('userinfo', res.data.data)
      pub().then(({data})=>{
      wx.setStorageSync('mypub', data.data)
        this.setData({
          todayPub:data.data
        })
        
      })
    })
  },
  async pub(e){
    if (wx.getStorageSync('userinfo')) {
    const {data} = await pub();
    this.setData({
      todayPub:data.data,
      index:Number(e.detail)
    })
  }
  },
  async record(e){
    if (wx.getStorageSync('userinfo')) {
    console.log('yuedu');
    const {data} = await read();
    this.setData({
      index:Number(e.detail),
      todayRead:data.data
    })
  }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('记载');
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('渲染');
  },  

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.setData({
        userinfo
      })
      if (wx.getStorageSync('mypub')) {
        this.setData({
          todayPub:wx.getStorageSync('mypub')
        })
      }else{
         pub().then(({data})=>{
        this.setData({
          todayPub:data.data
        })
        wx.setStorageSync('mypub', data.data)
      })
      }
    }
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