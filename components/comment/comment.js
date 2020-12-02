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
    avatar:wx.getStorageSync('userinfo').avatarurl
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
            console.log('用户点击确定')
            wx.navigateTo({
              url: '/pages/home/home',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
         }
       })
       
       
      }
     
    },
    handlereply(e){

     // let {wid,oside,comment_id} = e.currentTarget.dataset
      let {item} =  e.currentTarget.dataset
     // console.log(aid,wid);
      this.triggerEvent('reply',item)
    },
    itemreply(e){
      let item = e.detail
      this.triggerEvent('itemreply',item)

    }
    
  }
})
