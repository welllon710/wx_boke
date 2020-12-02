import request from "./network.js";
//const BaseUrl = 'http://42.192.92.208:90/api'
const BaseUrl = 'http://127.0.0.1:8000/api'
export function getcomment(uid){
  return request({
    url:BaseUrl+'/comment/'+uid
  })
}
export function comment(myname,myid,uid,value){
  return request({
    url:BaseUrl+'/comment',
    method:'post',
    data:{
      myname,
      myid,
      uid,
      value
    }
  })
}
export function reply(obj){
  return request({
    url:BaseUrl+'/reply',
    method:'post',
    data:{
      obj
    }
  })
}