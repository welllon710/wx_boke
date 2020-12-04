// pages/home/home.js
import { getCate } from "../../network/cate";
import { show } from "../../network/article";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateList:[],
    contentList:[],
    Currently:'',
    cate_id:6 //第一页的分类，用于缓存

  },
  last_page:1,//总页数
  page:1, //当前页码
  cate(e){  //点击分类切换内容
    let {id} = e.detail.cate
   // console.log(id);
    this.setData({
      contentList:[],
      cate_id:id
    })
    this.page = 1
    this._getArticle(id,this.page)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //走缓存
    let cate = wx.getStorageSync('cate')
    if(!cate){
      this._getCate()
      console.log('没有我');
      
    }else{
      if(Date.now() - cate.time > 1000*10){
        this._getCate()
        console.log('超时了');
        
      }else{
        console.log('使用我');
        
        this.setData({
          cateList:cate.data
        })
      }
    }
    this._getArticle(this.data.cate_id,this.page)
  },
  _getCate(){  //获取tabs分类
    getCate().then(res=>{
      wx.setStorageSync('cate', {time:Date.now(),data:res.data.data})
      this.setData({
        cateList:res.data.data,

      })
    })
  },
  _getArticle(id,page){  //根据分类请求内容
    show(id,page).then(res=>{
      this.tatal =  res.data.data.last_page,
      this.page = res.data.data.current_page
      this.setData({
        contentList:[...this.data.contentList,...res.data.data.data]
      })
      wx.stopPullDownRefresh();
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
      //清空数据，重置页码，重新请求，关闭效果
      this.setData({
        contentList:[]
      })
      //console.log('ces');
      
      this.page = 1
      this._getArticle(this.data.cate_id,this.page)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

    //下拉下一页
    if(this.page <= this.last_page){
     this.page++
     this._getArticle(this.data.cate_id,this.page)
    }else{
      wx.showToast({
        title: '没有下一页了哦',
        duration:2000,
        mask:true
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})