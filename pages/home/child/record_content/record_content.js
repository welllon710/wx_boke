// pages/home/child/record_content/record_content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array
    },
    order:{
      type:Number
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
  pageLifetimes:{
    show(){
      console.log(this.list);
      
    }
  },
  methods: {

  }
})
