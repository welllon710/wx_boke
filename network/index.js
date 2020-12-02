import request from "./network.js";
import BaseUrl from "./baseurl.js";
// const BaseUrl = 'http://42.192.92.208:90/api'
export function getProblem(id,page = 1){
  return request({
    url:BaseUrl+'/problem/'+id,
    data:{
      page:page
    }
  })
}
export function getCate(){
  return request({
    url:BaseUrl+'/topic'
  })
}