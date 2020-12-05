import request from "./network.js";
import BaseUrl from "./baseurl.js";

export function pub(code){
  return request({
    url:BaseUrl+'/wx/pub',
    method:'post',
    data:{
      code
    }
  })
}
export function read(code){
  return request({
    method:'post',
    url:BaseUrl+"/wx/read",
    data:{
      code
    }
  })
}
export function leavelogin(id){
  return request({
    method:'DELETE',
    url:BaseUrl+"/wx/delete/"+id,
  })
}