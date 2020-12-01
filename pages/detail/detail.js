// pages/detail/detail.js
import { detail,leave } from "../../network/article";
import { getcomment } from "../../network/comment";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      select:false,
      detail:{},
      isshow:false,
      commentList:[]
  },
  uid:0,
  handlewrite(){
    this.setData({
      isshow:!this.data.isshow
    })
  },
  handlecencel(){
    this.setData({
      isshow:false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    let {uid,time} = options
    this.uid = uid
    wx.setStorageSync('uid', uid)
    this._getDetail(uid,time)
    this.getcomment(uid)
  },
  _getDetail(id,time){
    console.log('请求了');
    detail(id,time).then(res=>{
      this.setData({
        detail:res.data.data
      })
    })
  },
  getcomment(uid){ //获取评论
    getcomment(uid).then(res=>{
      console.log(res);
      this.setData({
        commentList:res.data.data
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
    let timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    leave(this.uid,timestamp).then(res=>{
      if(res.data.code === 200){
        console.log(res.msg);
        wx.showToast({
          title:res.data.msg
        })
      }else{
        wx.showToast({
          title:res.data.msg
        })
      }
      
    })
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