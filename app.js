//app.js
import { login } from "./network/login";
import  {wxlogin,saveopenid}  from "./network/wxlogin";
App({
   onLaunch:function(){
    const openid = wx.getStorageSync('openid')
    if (!openid) {
    
      
      this._login()
    }
   
  },
  async _login(){
    const {code} = await wxlogin()
    const {data} = await login(code)
    console.log(data);
   wx.setStorageSync('openid', data.data.openid)
  }
})