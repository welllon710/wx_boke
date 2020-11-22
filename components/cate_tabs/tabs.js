// components/cate/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    left:0,
    current:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchtab(e){
      let { current } = e.target.dataset
      let { cate } = e.target.dataset
      if(this.data.current !== current){
        this.setData({
          current:current
        })
      }
      this.triggerEvent('cate',{cate:cate})
    }
  }
})
