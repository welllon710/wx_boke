// components/my_input/my_input.js
Component({
  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field-group'],
  properties: {
    title:{
      type:String
    },
    name:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
