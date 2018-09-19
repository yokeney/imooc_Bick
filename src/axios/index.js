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
      let baseApi='https://www.easy-mock.com/mock/5ba0cd160915f041faa14953/yokeAPI/';
      return new Promise((resolve,reject)=>{
          axios({
              url:options.url,
              methods:'get',
              baseURL:baseApi,
              timeout:5000,
              params:(options.data&&options.data.params) || ''
          }).then((response)=>{
              if (response.status===200) {
                  let res=response.data;
                  if (res.code===0) {
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
