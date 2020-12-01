import request from "./network.js";
//const BaseUrl = 'http://42.192.92.208:90/api'
const BaseUrl = 'http://127.0.0.1:8000/api'
export function getcomment(uid){
  return request({
    url:BaseUrl+'/comment/'+uid
  })
}
export function comment(wxid,uid,value){
  return request({
    url:BaseUrl+'/comment',
    method:'post',
    data:{

      wxid,
      uid,
      value
    }
  })
}