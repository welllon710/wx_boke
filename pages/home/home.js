// pages/home/home.js
import { saveUser } from "../../network/wxlogin";
import { pub,read,leavelogin } from "../../network/home";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:[],
    todayPub:[],
    todayRead:[],
    index:0,
  },
  getUser(e){ //获取个人信息
     const {userInfo} = e.detail
    let user = {
      nickname:userInfo.nickName,
      gender:userInfo.gender,
      avatarurl:userInfo.avatarUrl,
      country:userInfo.country,
      openid:wx.getStorageSync('openid')
    }
    saveUser(user).then(res=>{ //发送个人信息到数据库
      console.log(res);
      this.setData({
        userinfo:res.data.data
      })
      wx.setStorageSync('userinfo', res.data.data)
      pub(wx.getStorageSync('openid')).then(({data})=>{
      wx.setStorageSync('mypub', data.data)
        this.setData({
          todayPub:data.data
        })
        
      })
    })
  },
  leavelogin(){
    const id = wx.getStorageSync('userinfo').id
    wx.showModal({
      title:'提示',
      content:'您确定要退出吗？',
      success: (res)=> {
        if (res.confirm) {
        leavelogin(id).then(res=>{
          if (res.data.code === 200) {
            this.setData({
              userinfo:[],
              todayPub:[],
              todayRead:[]
            })
            wx.setStorageSync('userinfo', null)
            wx.setStorageSync('mypub', [])
          }
        })
        } 
        }
    })
  },
  async pub(e){  //我的发布
    if (wx.getStorageSync('userinfo')) {
    const {data} = await pub(wx.getStorageSync('openid'));
    this.setData({
      todayPub:data.data,
      index:Number(e.detail)
    })
    wx.setStorageSync('mypub', data.data)
    if (data.code === 400) {
      wx.showToast({
        title: data.msg,
        duration:2000,
        mask:true
      })
    }
  }
  },
  async record(e){  //我的阅读
    if (wx.getStorageSync('userinfo')) {
    const {data} = await read(wx.getStorageSync('openid'));
    this.setData({
      index:Number(e.detail),
      todayRead:data.data
    })
    if (data.code === 400) {
      wx.showToast({
        title: data.msg,
        duration:2000,
        mask:true
      })
    }
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
  onShow: function () {  //页面缓存我的发布
    const userinfo = wx.getStorageSync('userinfo')
    console.log('XIANSHI');
    if (userinfo) {
      this.setData({
        userinfo
      })
      if(!wx.getStorageSync('mypub')){
      pub(wx.getStorageSync('openid')).then(({data})=>{
        this.setData({
          todayPub:data.data
        })
        wx.setStorageSync('mypub', data.data)
      })
    }else{
      this.setData({
        todayPub:wx.getStorageSync('mypub')
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