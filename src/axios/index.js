import JsonP from 'jsonp'
import {Modal} from 'antd'
import  axios from 'axios'
export default class Axios{
  static jsonp(options){
  return  new Promise((resolve,reject)=>{
        JsonP(options.url,{
          param:'callback'
        },(err,reponse)=>{
            if (reponse.status==="success") {
              resolve(resolve)
            }
            else{
              reject(err.message);
            }
        })
      })
  }
  static ajax(options){
      let loading;
      if (options.data && options.data.isshowLoading!==false) {
          loading=document.getElementById('ajaxLoading');
          loading.style.display="block";
      }
      let baseApi='';
      if (options.isMock) {
          baseApi='https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
      }
      else{
          baseApi='https://www.easy-mock.com/mock/5baddde8f5f80f6dcfa24fd5/yoke/';
      }
      return new Promise((resolve,reject)=>{
          axios({
              url:options.url,
              methods:'get',
              baseURL:baseApi,
              timeout:5000,
              params:(options.data&&options.data.params) || ''
          }).then((response)=>{
              if (options.data && options.data.isshowLoading!==false) {
                  loading=document.getElementById('ajaxLoading');
                  loading.style.display="none";
              }
              if (response.status===200) {
                  let res=response.data;
                  console.log(res.code);
                  if (res.code==0) {
                      resolve(res);
                  }
                  else{
                      Modal.info({
                          title:'提示',
                          content:res.msg
                      })
                  }
              }
              else{
                  reject(response.data);
              }
          })
      })
  }
}
