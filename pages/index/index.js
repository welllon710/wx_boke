import { getProblem,getCate } from "../../network/index";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:['javascript','html','css','vue'],
    problemList:[],
    topicList:[],
    topic_id:1, //当前分类
  //  page:1,//当前页码
  },
  problem:[],
  total:1,
  page:1,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this._getProblem(this.data.topic_id,this.page)
  this._getcate()
  },
  _getProblem(id,page){
    getProblem(id,page).then(res=>{
    //  this.problem = res.data.data
  //   wx.setStorageSync('problem'+this.data.topic_id,{time:Date.now(),data:this.problem})
    console.log(res);
     this.total = res.data.data.last_page //总页数
     this.page = res.data.data.current_page //当前页
      this.setData({
        problemList: [...this.data.problemList,...res.data.data.data],
      })
      wx.stopPullDownRefresh()
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
    let {id} = e.detail.cate
    this.setData({
      topic_id:id,
      problemList:[]
    })
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
    this.setData({
      problemList:[]
    })
    this.page = 1
    this._getProblem(this.data.topic_id,this.page)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log('吃滴');
      //下拉下一页
      console.log(this.page,this.total);
      
      if(this.page < this.total){
       
       console.log('还有下一页');
       this.page++
       this._getProblem(this.data.topic_id,this.page)
      }else{
        console.log('meiyu');
        wx.showToast({
          title: '没有下一页了哦',
        })
      }
      
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})