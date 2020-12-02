// components/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentList:{
      type:Array
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    //avatar:wx.getStorageSync('userinfo').avatarurl,
    avatar:''
  },
  pageLifetimes:{
    show: function() {
      // 页面被展示
      console.log('展示');
      this.setData({
        avatar:wx.getStorageSync('userinfo').avatarurl,
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
   // userinfo:wx.getStorageSync('userinfo'),
    handlewtite(){
     const userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.triggerEvent('write')
      }else{
       wx.showModal({
         title:'登录框',
         content:'请先登录,再来评论哦',
         success(res){
          if (res.confirm) {
          wx.switchTab({
            url: '/pages/home/home',
          })
          } 
         }
       })
      }
    },
    handlereply(e){
      const userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        let {item} =  e.currentTarget.dataset
        this.triggerEvent('reply',item)
      }
    },
    itemreply(e){
      const userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        let item = e.detail
        this.triggerEvent('itemreply',item)
      }
    }
    
  }
})
