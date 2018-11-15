import React,{Component} from "react";
import {Card,Button,Modal,Form,Select,Input,Message,Tree,Transfer} from 'antd';
import Etable from '../../compoments/Etable'
import axios from './../../axios/index';
import util from '../../util/util';
import menuConfig from './../../config/menuConfig.js'
const FormItem=Form.Item;
const Option=Select.Option;
const TreeNode=Tree.TreeNode;
 export default class PermissionUser  extends Component{
     state={
         isVisible:false,
         isPermissVisible:false,
         isPermissVisible:false,
         dtailIinfo:{},
     }
     componentWillMount(){
         console.log(this.state.selectItem);
         axios.requestList(this,'/role/list',{})
     }
     handlePerSubmit=()=>{
         let data=this.perForm.props.form.getFieldsValue();
         data.role_id=this.state.selectItem.id;
         data.menus=this.state.menuinfo;
         console.log(data);
         axios.ajax({
             url:"/perEdit",
             data:{
                 params:{
                     ...data
                 }
             }
         }).then((res)=>{
             if (res.code=="0") {
                 this.setState({
                     isPermissVisible:false
                 })
                 axios.requestList(this,'/role/list',{})
             }
         })
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
                      Message.info("创建成功了")
                  })
                  axios.requestList(this,'/role/list',{})

              }
          })
       }
       handlePermission=()=>{
           let item=this.state.selectItem;
           if(!item){
               Modal.info({
                   title:"请现在一个角色"
               })
               return
           }
           this.setState({
               isPermissVisible:true,
               dtailIinfo:item,
               menuinfo:item.menus
           })
       }
       //用户授权
       handleUserAuth=()=>{
           let item=this.state.selectItem;
           if(!item){
               Modal.info({
                   title:"请现在一个角色"
               })
               return
           }
           this.setState({
               isUserVisible:true,
               detailInfo:item
           })
           this.getUserRoleList(item.id);
        }
        getUserRoleList=(id)=>{
            axios.ajax({
                url:"/role/user_list",
                data:{
                    params:id
                },
                isMock:true
            }).then((res)=>{
                if (res) {
                    this.getAuthUserList(res.result);
                }
            })
         }
         //刷选目标用户
         getAuthUserList=(dataSource)=>{
             const mockData=[];
             const targetKeys=[];
             if (dataSource && dataSource.length>0) {
                 for(let i=0;i<dataSource.length;i++){
                     const data={
                         key:dataSource[i].user_id,
                         title:dataSource[i].user_name,
                         status:dataSource[i].status
                     }
                     if(data.status==1){
                         targetKeys.push(data.key)
                     }
                     mockData.push(data);
                 }
                 this.setState({
                     targetKeys,mockData
                 })
             }
          }
          //用户授全提交
          handleUserSubmit=()=>{
              let data={};
              data.user_ids=this.state.targetKeys
              data.role_ids=this.state.selectItem.id;
              axios.ajax({
                  url:"/permissionSub",
                  data:{
                      params:{
                          ...data
                      }
                  }
              }).then((res)=>{
                  if (res.code==0) {
                      this.setState({
                          isUserVisible:false
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
                     <Button type="primary" onClick={this.handleUserAuth}>用户授权</Button>
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
                 <Modal
                    title="设置权限"
                    visible={this.state.isPermissVisible}
                    width={600}
                    onOk={this.handlePerSubmit}
                    onCancel={()=>{
                        this.setState({
                            isPermissVisible:false
                        })
                    }}
                 >
                     <PerEditForm
                     menuinfo={this.state.menuinfo}
                     patchMenuInfo={(checkedKeys)=>{this.setState({menuinfo:checkedKeys})}}
                     wrappedComponentRef={(inst)=>this.perForm=inst }
                     dtailIinfo={this.state.dtailIinfo}/>
                 </Modal>
                 <Modal
                    title="用户授权"
                    visible={this.state.isUserVisible}
                    width={600}
                    onOk={this.handleUserSubmit}
                    onCancel={()=>{
                        this.setState({
                            isUserVisible:false
                        })
                    }}
                 >
                     <RoleAuthForm
                     targetKeys={this.state.targetKeys}
                     mockData={this.state.mockData}
                     patchUserInfo={(targetKeys)=>{
                         this.setState({
                             targetKeys
                         })
                     }}
                     wrappedComponentRef={(inst)=>this.userAuthForm=inst }
                     dtailIinfo={this.state.dtailIinfo}/>
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
class PerEditForm extends Component{
    onCheck=(checkedKeys)=>{
        this.props.patchMenuInfo(checkedKeys);
     }
    renderTreeNode=(data)=>{
        return data.map((item)=>{
            if (item.children) {
                return <TreeNode title={item.title} key={item.key}>
                    {this.renderTreeNode(item.children)}
                </TreeNode>
            }
            else{
                return <TreeNode title={item.title} key={item.key} />
            }
        })
     }
    render(){
        const {getFieldDecorator}=this.props.form;
        const dtailIinfo=this.props.dtailIinfo;
        const menuinfo=this.props.menuinfo;
        const formitemLayout={
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        return(
            <Form layout="horizontal">
                    <FormItem label="角色名称" {...formitemLayout}>
                        <Input disabled placeholder={dtailIinfo.role_name}/>
                    </FormItem>
                    <FormItem label="状态" {...formitemLayout}>
                        {
                            getFieldDecorator("status",{
                                initialValue:"1"
                            })(
                                <Select>
                                    <Option value="1">启用</Option>
                                    <Option value="0">停用</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                    <Tree
                     checkable
                     defaultExpandAll
                     onCheck={(checkedKeys)=>{
                         this.onCheck(checkedKeys)
                     }}
                     checkedKeys={menuinfo}
                     >
                        <TreeNode title="平台权限" key="platform-all">
                            {this.renderTreeNode(menuConfig)}
                        </TreeNode>
                    </Tree>
            </Form>
        )
    }
}
PerEditForm=Form.create({})(PerEditForm);
class RoleAuthForm extends Component{
    onCheck=(checkedKeys)=>{
        this.props.patchMenuInfo(checkedKeys);
    }
     filterOption = (inputValue, option) => {
    return option.title.indexOf(inputValue) > -1;
    }
    handleChange=(targetKeys)=>{
        this.props.patchUserInfo(targetKeys);
     }
    render(){
        const {getFieldDecorator}=this.props.form;
        const dtailIinfo=this.props.dtailIinfo;
        const mockData=this.props.mockData;
        const targetKeys=this.props.targetKeys;
        const formitemLayout={
            labelCol:{span:5},
            wrapperCol:{span:19}
        }
        return(
            <Form layout="horizontal">
                    <FormItem label="角色名称" {...formitemLayout}>
                        <Input disabled placeholder={dtailIinfo.role_name}/>
                    </FormItem>
                    <FormItem label="选择用户" {...formitemLayout}>
                        <Transfer
                            listStyle={{width:200,height:400}}
                            dataSource={mockData}
                            titles={['待选用户','已选用户']}
                            searchPlaceholder="输入用户名"
                            showSearch
                            filterOption={this.filterOption}
                            targetKeys={targetKeys}
                            render={item=>item.title}
                            onChange={this.handleChange}
                        />
                    </FormItem>
            </Form>
        )
    }
}
RoleAuthForm=Form.create({})(RoleAuthForm);
