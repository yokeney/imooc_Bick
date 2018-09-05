import React,{Component} from "react";
import {Card,Button,Radio,notification} from 'antd'
 export default class Notification extends Component{
     openNotification=(type,dir)=>{
         if (dir) {
             notification[type]({
            placement:dir,
            message:'发工资了',
            description:"好像我的还没有发，不知是把我给卖了"
            })
         } else {
             notification[type]({
                 message:'发工资了',
                 description:"好像我的还没有发，不知是把我给卖了"
             })
         }
     }
     render(){
         return (
             <div>
                 <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>error</Button>
                 </Card>
                 <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success","topRight")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info","topLeft")}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning","bottomRight")}>warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error","bottomLeft")}>error</Button>
                 </Card>
             </div>
         )
     }
 }
