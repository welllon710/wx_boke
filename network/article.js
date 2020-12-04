import request from "./network.js";
import BaseUrl from "./baseurl.js";
export function saveArticle(data){ //写文章
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