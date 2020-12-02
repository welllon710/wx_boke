// components/reply/reply.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    comment_item:{
      type:Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    userinfo:wx.getStorageSync('userinfo'),
 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemreply(e){
      let {item} = e.currentTarget.dataset
      this.triggerEvent('itemreply',item)
    }
  }
})
