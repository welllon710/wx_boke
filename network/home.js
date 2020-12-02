import request from "./network.js";
import BaseUrl from "./baseurl.js";
// const BaseUrl = 'http://42.192.92.208:90/api'
// //const BaseUrl = 'http://127.0.0.1:8000/api'
export function pub(){
  return request({
    url:BaseUrl+'/wx',
    // data:{
    //   code:wx.getStorageSync('openid')
    // }
  })
}
export function read(){
  return request({
    url:BaseUrl+"/wx/read",
  })
}