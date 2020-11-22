// components/select_down/select_down.js
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
    isShow:false,
    content:'我是内容'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletap(e){
      let {index} = e.target.dataset
      let {value} = e.target.dataset
      this.setData({
        current:index,
        content:value,
        isShow:false
      })

    },
    handleshow(){
      this.setData({
        isShow:!this.data.isShow
      })
    }
  }
})
