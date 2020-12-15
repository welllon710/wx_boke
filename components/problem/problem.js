// components/problem/problem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:true,
    isbool:false,
 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    cartoons(e){
      let  {index} = e.currentTarget.dataset
      this.setData({
        show:!this.data.show
      })
      this.triggerEvent('changeindex',index)
    }
  },

})
