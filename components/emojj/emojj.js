// components/emojj/emojj.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    emojj:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapEmojj(e){
  
      let {i} = e.currentTarget.dataset
      this.triggerEvent('emojj',i)
    }
  }
})
