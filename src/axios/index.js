import JsonP from 'jsonp'
export default class Axios{
  static jsonp(options){
  return  new Promise((resolve,reject)=>{
        JsonP(options.url,{
          param:'callback'
        },(err,reponse)=>{
            if (reponse.status="success") {
              resolve(resolve)
            }
            else{
              reject(err.message);
            }
        })
      })
  }
}
