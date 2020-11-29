// pages/home/child/record/record.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlejump(e){
      let {index} = e.currentTarget.dataset
      this.setData({
        current:index
      })
      if(index == 0){
       this.triggerEvent('pub',index)
      }else{
        this.triggerEvent('record',index)
      }
      
    }
  }
})
