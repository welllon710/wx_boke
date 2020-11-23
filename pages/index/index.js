import { getProblem,getCate } from "../../network/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['javascript','html','css','vue'],
    problemList:[],
    topicList:[],
    topic_id:1,
    page:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getProblem(this.data.topic_id,this.data.page)

  this._getcate()
  },
  _getProblem(id,page){
    getProblem(id,page).then(res=>{
      this.setData({
        problemList:res.data.data
      })
    })
  },
  _getcate(){
    getCate().then(res=>{
      console.log(res);
      this.setData({
        topicList:res.data.data
      })
    })
  },
  cate(e){
    console.log(e);
    let {id} = e.detail.cate
    this._getProblem(id)
    
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
    console.log('xiala');
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log('吃滴');
      
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})