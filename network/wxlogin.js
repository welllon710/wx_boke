import  request  from "../network/network";
import BaseUrl from "./baseurl.js";
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
    url:BaseUrl+"/wx/save",
    method:'post',
    data:{
      user
    }
  })
}