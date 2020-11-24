import request from "./network.js";
//const BaseUrl = 'http://42.192.92.208:90/api'
const BaseUrl = 'http://127.0.0.1:8000/api'
export function getCate(){
  return request({
    url:BaseUrl+'/cate'
  })
}