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
     
      try {
        let item = e.currentTarget.dataset.item ? e.currentTarget.dataset.item : e.detail
        //let item = e.currentTarget.dataset.item ? e.currentTarget.dataset.item: 'wu'
       this.triggerEvent('itemreplys',item)
      } catch (error) {
        console.log(error);
        
      }


      
    },
    itemreplysec(e){
      let {item} = e.detail
      this.itemreply(e)
    }
  }
})
