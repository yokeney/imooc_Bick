import React,{Component} from "react";
import {Modal,Button,Card} from 'antd'
import '../ui.less'
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
          showModalcomfirm=(type)=>{
              Modal[type]({
                  title:'确认?',
                  content:'hello',
                  onOk(){
                      console.log("ok");
                  },
                  onCancel(){
                      console.log("cancle");
                  }
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
                 <Card className="wrap-card">
                 {/*传参数时要添加箭头函数*/}
                     <Button type="primary" onClick={()=>this.showModalcomfirm("confirm")}>Confirm</Button>
                     <Button type="primary" onClick={()=>this.showModalcomfirm("info")}>info</Button>
                     <Button type="primary" onClick={()=>this.showModalcomfirm("success")}>Success</Button>
                     <Button type="primary" onClick={()=>this.showModalcomfirm("error")}>error</Button>
                     <Button type="primary" onClick={()=>this.showModalcomfirm("warning")}>warning</Button>
                 </Card>
                 <Modal
                   title="react"
                   style={{top:20}}
                   visible={this.state.showModal1}
                   onOk={this.handleOk}
                   onCancel={()=>this.cancle("showModal1")}
                 >
                   <p>welcome to my page</p>
                 </Modal>
                 <Modal
                   title="react"
                   WrapclassName="vertical-center-modal"
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
