import request from "./network.js";
import BaseUrl from "./baseurl.js";
// const BaseUrl = 'http://42.192.92.208:90/api'
// //const BaseUrl = 'http://127.0.0.1:8000/api'
export function login(code){
  return request({
    url:BaseUrl+'/login',
    method:'post',
    data:{code}
  })
}