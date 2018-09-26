export default {
  formateDate(time){
    if (!time) {
      return ''
    }
    let  date=new Date(time);
    return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
},
pagination(data,callback){
    return{
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total:data.result.totle_count,
            showTotal:()=>{
                return `${data.result.totle_count}`
            },
            showQuickJumper:true
           }
        }
    }
