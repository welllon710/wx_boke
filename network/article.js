import request from "./network.js";
import BaseUrl from "./baseurl.js";
// const BaseUrl = 'http://42.192.92.208:90/api'
// //const BaseUrl = 'http://127.0.0.1:8000/api'
export function saveArticle(data){
  return request({
    method:'post',
    url:BaseUrl+'/article',
    data,
  })
}
export function show(id,page=1){
  return request({
    url:BaseUrl+'/article/'+id,
    data:{
      page:page
    }
  })
}
export function detail(uid,time){
  return request({
    url:BaseUrl+'/articles/detail',
    method:'get',
    data:{
      uid,
      time,
      openid:wx.getStorageSync('openid')||''
     // openid:''
    }
  })
}
export function leave(uid,leavetime){
  return request({
    url:BaseUrl+'/leave/detail',
    data:{
      uid,
      leavetime,
    }
  })
}