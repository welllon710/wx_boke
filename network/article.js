import request from "./network.js";
//const BaseUrl = 'http://42.192.92.208:90/api'
const BaseUrl = 'http://127.0.0.1:8000/api'
export function saveArticle(data){
  return request({
    method:'post',
    url:BaseUrl+'/article',
    data,
  })
}