// pages/detail/detail.js
import { detail,leave } from "../../network/article";
import { getcomment,comment,reply } from "../../network/comment";
Page({

  /**
   * 页面的初始数据
   */
  data: {
      select:false,
      detail:{},
      isshow:false,//写评论的框
      isSend:true,
      totals:0,
      osidename:'',
      commentList:[]
  },
  uid:0,
  total:0,//评论计数
  replyObj:{},
  handlewrite(){
    this.setData({
      isshow:!this.data.isshow,
      isSend:true,
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
    var timestamp = Date.parse(new Date());  
    timestamp = timestamp / 1000;  
    let {uid} = options
    this.uid = uid
    wx.setStorageSync('uid', uid)
    this._getDetail(uid,timestamp)
    this.getcomment(uid)
  },
  _getDetail(id,timestamp){
   // console.log('请求了');
    detail(id,timestamp).then(res=>{
      this.setData({
        detail:res.data.data
      })
    })
  },
  getcomment(uid){ //获取评论
  
    getcomment(uid).then(res=>{
      console.log(res.data.data);
      let total = this.count(res.data.data)
      console.log(total);
      
      this.setData({
        commentList:res.data.data,
        totals:total
      })
    })
  },
  //递归
  count(arr){
    arr.map(item=>{
     this.total++
      if(item.child.length!==0){
        this.count(item.child)
      }
    })
    return this.total
  },
  handlemsg(e){
    //发送评论
    let uid = wx.getStorageSync('uid') //文章id
    let myid = wx.getStorageSync('userinfo').id //用户id
    let myname =  wx.getStorageSync('userinfo').nickname //用户名
    let value = e.detail
      if (this.data.isSend) {
      comment(myname,myid,uid,value).then(res=>{
        if(res.data.code === 200){
          wx.showToast({
            title: '已发送',
            duration:2000,
            mask:true,
            success:()=>{
              this.setData({
                isshow:false
              })
              this.getcomment(uid)
            }
          })
        }else{
          wx.showToast({
            title:'提交失败,'+res.data.msg
          })
        }
      })
    }else{
      //回复
      this.replyObj['uid'] = uid
      this.replyObj['myid'] = myid
      this.replyObj['myname'] = myname
      this.replyObj['value'] = value
      reply(this.replyObj).then(res=>{
        if(res.data.code === 200){
          wx.showToast({
            title: '已发送',
            duration:2000,
            mask:true,
            success:()=>{
              this.setData({
                isshow:false
              })
              this.replyObj = {}
              this.getcomment(uid)
            }
          })
        }else{
          wx.showToast({
            title:'提交失败,'+res.data.msg
          })
        }
      })
    }
  },
  handlereply(e){ //回复评论
   // let {wid,oside,comment_id} = e.detail
  let item = e.detail
    this.setData({
      isshow:true,
      isSend:false,
      osidename:item.nickname
    })
     this.replyObj = {
      wid:item.wx_id, //对方id
      cid:item.id, //评论id
      pname:item.nickname //对方名字
      // uid,//文章id
      // myid,//我的id
      // myname //我的用户名
    }
   
  },
  itemhandlereply(e){
    let item = e.detail
    this.setData({
      isshow:true,
      isSend:false,
      osidename:item.nickname
    })
    this.replyObj = {
      wid:item.wx_id, //对方id
      cid:item.id, //评论id
      pname:item.nickname //对方名字
      // uid,//文章id
      // myid,//我的id
      // myname //我的用户名
    }
    
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
      console.log(res.data);
      if(res.data.code === 204){
        console.log('shijian');
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