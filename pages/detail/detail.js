// pages/detail/detail.js
import { detail,leave } from "../../network/article";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      select:false,
      detail:{}
  },
  uid:'',
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    let {uid,time} = options
    this.uid = uid
    this._getDetail(uid,time)
  },
  _getDetail(id,time){
    console.log('请求了');
    detail(id,time).then(res=>{
      this.setData({
        detail:res.data.data
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