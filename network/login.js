import request from "./network.js";
import BaseUrl from "./baseurl.js";


export function login(code){
  return request({
    url:BaseUrl+'/login',
    method:'post',
    data:{code}
  })
}