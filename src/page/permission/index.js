import React,{Component} from "react";
import {Card,Button,Modal,Form,Select,Input,Message} from 'antd';
import Etable from '../../compoments/Etable'
import axios from './../../axios/index';
import util from '../../util/util';
const FormItem=Form.Item;
const Option=Select.Option;
 export default class PermissionUser  extends Component{
     state={
         isVisible:false
     }
     componentWillMount(){
         console.log(this.state.selectItem);
         axios.requestList(this,'/role/list',{})
     }
     handleRoleCreate=()=>{
         this.setState({
             isVisible:true
         })
      }
      handleRoleSubmit=()=>{
          let data=this.RoleForm.props.form.getFieldsValue();
          axios.ajax({
              url:'/permissionSub',
              data:{
                  params:data
              }
          }).then((res)=>{
              if (res.code==0) {
                  this.RoleForm.props.form.resetFields();
                  this.setState({
                      isVisible:false
                  },()=>{
                      Message.info("创建成功")
                  })
                  axios.requestList(this,'/role/list',{})

              }
          })

       }
     render(){
         const columns=[
             {
                 title:'角色ID',
                 dataIndex:'id'
             },
             {
                 title:'角色名称',
                 dataIndex:'role_name'
             },
             {
                 title:'创建时间',
                 dataIndex:'create_time'
             },
             {
                 title:'授权时间',
                 dataIndex:'authorize_time',
                 render:util.formateDate
             },
             {
                 title:'使用状态',
                 dataIndex:'status',
                 render(mode){
                     return mode==1?"已停":"未停"
                 }
             },
             {
                 title:'授权人',
                 dataIndex:'authorize_user_name'
             }
         ]
         return (
             <div>
                 <Card>
                     <Button type="primary" onClick={this.handleRoleCreate}>创建角色</Button>
                     <Button type="primary" onClick={this.handlePermission}>设置权限</Button>
                     <Button type="primary" onClick={this.handleGetContent}>用户授权</Button>
                 </Card>
                 <Card>
                     <div className="content-wrap">
                         <Etable
                             columns={columns}
                             updateSelectedItem={util.updateSelectedItem.bind(this)}
                             selectItem={this.state.selectItem}
                             selectedRowKeys={this.state.selectedRowKeys}
                             dataSource={this.state.list}
                             pagination={false}
                         />
                     </div>
                 </Card>
                 <Modal
                 title="创建角色"
                 visible={this.state.isVisible}
                 onOk={this.handleRoleSubmit}
                 onCancel={()=>{
                     this.RoleForm.props.form.resetFields();
                     this.setState({
                         isVisible:false
                     })
                 }}
                 >
                    <RoleForm  wrappedComponentRef={(inst)=>this.RoleForm=inst }/ >
                 </Modal>
             </div>
         )
     }
 }
 class RoleForm extends Component{
     getState=(status)=>{
             return{
                 '1':'咸鱼一条',
                 '2':'凤凰鸣',
                 '3':'无衣',
                 '4':'六六',
             }[status]
         }
     render(){
         let type=this.props.type;
         let userInfo=this.props.userInfo ||{};
         console.log(userInfo);
         const {getFieldDecorator} =this.props.form;
         const formitemLayout={
             labelCol:{span:5},
             wrapperCol:{span:15}
         }
         return(
             <Form layout="horizontal">
                 <FormItem label="角色名称" {...formitemLayout}>
                 {
                     getFieldDecorator("Role_name")(
                         <Input type="text" placeholder="请输入用户名" />
                     )
                 }
                 </FormItem>
                 <FormItem label="状态" {...formitemLayout}>
                 {
                     getFieldDecorator("status")(
                         <Select>
                         <Option value={1}>开启</Option>
                         <Option value={2}>关闭</Option>
                         </Select>
                     )
                 }
                 </FormItem>
             </Form>
         )
     }
 }
 RoleForm=Form.create({})(RoleForm);
