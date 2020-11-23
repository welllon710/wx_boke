let time = 0
export default function(options){
  time++
  wx.showLoading({
    title: '加载中',
    mask:true
  })
  return new Promise((resole,reject)=>{
    wx.request({
      url: options.url,
      method:options.method ||'get',
      data:options.data||{},
      success:resole,
      fail:reject,
      complete:()=>{
        time--
        if (time===0) {
          wx.hideLoading({
            success: (res) => {},
          })
        }
      }
    })
  })
}