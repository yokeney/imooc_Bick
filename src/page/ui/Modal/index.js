import React,{Component} from "react";
import {Modal,Button,Card} from 'antd'
 export default class Modals extends Component{
     constructor() {
         super();
     }
      state = {
             showModal1: false,
             showModal2: false,
             showModal3: false,
             showModal4: false,
         }
         showModal = (type)=>{
             this.setState({
                 [type]:true
             })
         }
         cancle=(type)=>{
             this.setState({
                 [type]:false
             })
          }
     render(){
         return (
             <div>
                 <Card>
                 {/*传参数时要添加箭头函数*/}
                     <Button type="primary" onClick={()=>this.showModal("showModal1")}>Open</Button>
                     <Button type="primary" onClick={()=>this.showModal("showModal2")}>自定义页脚</Button>
                     <Button type="primary" onClick={()=>this.showModal("showModal3")}>顶部20px弹窗</Button>
                     <Button type="primary" onClick={()=>this.showModal("showModal4")}>水平垂直居中</Button>
                 </Card>
                 <Modal
                   title="react"
                   visible={this.state.showModal1}
                   onOk={this.handleOk}
                   onCancel={()=>this.cancle("showModal1")}
                 >
                   <p>welcome to my page</p>
                 </Modal>
                 <Modal
                   title="react"
           visible={this.state.showModal2}
                   onOk={this.handleOk}
                   onCancel={()=>this.cancle("showModal2")}
                 >
                   <p>welcome to my page</p>
                 </Modal>
                 <Modal
                   title="react"
                   visible={this.state.showModal3}
                   onOk={this.handleOk}
                   onCancel={()=>this.cancle("showModal3")}
                 >
                   <p>welcome to my page</p>
                 </Modal>
                 <Modal
                   title="react"
                   visible={this.state.showModal4}
                   onOk={this.handleOk}
                   onCancel={()=>this.cancle("showModal4")}
                 >
                   <p>welcome to my page</p>
                 </Modal>
             </div>
         )
     }
 }
