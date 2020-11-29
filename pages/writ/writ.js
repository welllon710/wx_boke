// pages/writ/writ.js
import { saveArticle } from "../../network/article";
import { getCate } from "../../network/cate";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList:[]
  },
  formSubmit(e){

    let {value} = e.detail
    value['openid'] = wx.getStorageSync('openid');//判断有没openid,没有跳转登录
    saveArticle(value).then(res=>{
      console.log(res);
      if(res.data.code === 200){
        wx.showToast({
          title:'文章已提交'
        })
      }else{
        wx.showToast({
          title:'提交失败,'+res.data.msg
        })
      }
    })
    
  },
  formReset(){
    console.log('重置');
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCate()
  },
  _getCate(){
    getCate().then(res=>{
      console.log(res);
      this.setData({
        cateList:res.data.data
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