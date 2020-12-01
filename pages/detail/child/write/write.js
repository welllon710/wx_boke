// pages/detail/child/write/write.js
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
    val:'',
    emojj:[
      {
        id:1,
        char:'😰'
      },
      {
        id:2,
        char:'😃'
      },
      {
        id:3,
        char:'🙏'
      },
      {
        id:4,
        char:'💗'
      },
      {
        id:5,
        char:'👍'
      },
      {
        id:6,
        char:'👌'
      },
      {
        id:7,
        char:'🍗'
      },
      {
        id:8,
        char:'🎉'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlecancer(){
      this.triggerEvent('cencel')
    },
    inputedit(e){
      let {value} = e.detail
      let {name} = e.currentTarget.dataset
      this.data[name] = value
      this.setData({
        val:this.data[name]
      })
    },
    tapemojj(e){
      
      let i = e.detail

      this.setData({
        val:this.data.val+this.data.emojj[i].char
      })
    },
    sendmsg(){
        if (this.data.val !== '') {
          this.triggerEvent('sendmsg',this.data.val)
        }
       
      
      
      //console.log(this.data.val);
      //id，文章id,用户id，内容,父类id
      /*
        文章id => wx.getStorageInfoSync('uid')
        用户id => wx.getStorageInfoSync('userinfo').id
        内容 => value
        父 => 0
      */
    //  let uid = wx.getStorageSync('uid')
    //  let wxid = wx.getStorageSync('userinfo').id
    //  let value = this.data.val
    //   comment(wxid,uid,value).then(res=>{
    //     console.log(res);
    //     if(res.data.code === 200){
    //       wx.showToast({
    //         title: '已发送',
    //       })
    //       getcomment(uid)
    //     }
    //   })
    }
  }
})
