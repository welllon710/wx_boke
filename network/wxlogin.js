import  request  from "../network/network";
import BaseUrl from "./baseurl.js";
// const BaseUrl = 'http://42.192.92.208:90/api'
// //const BaseUrl = 'http://127.0.0.1:8000/api'
export function wxlogin(){
  return new Promise((resole,reject)=>{
    wx.login({
      timeout: 2000,
      success:res=>{resole(res)},
    })
  })
}

export function saveUser(user){
  return request({
    url:BaseUrl+"/wx",
    method:'post',
    data:{
      user
    }
  })
}