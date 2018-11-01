 import React,{Component} from "react";
 import {Card,Button,Modal,Form,Radio,DatePicker,Input,Select} from "antd"
 import util from "../../util/util"
 import Baseform from "../../compoments/baseForm"
 import axios from "./../../axios/index"
 import Etable from "../../compoments/Etable"
 const FormItem=Form.Item;
 const RadioGroup=Radio.Group;
 const TextArea=Input.TextArea;
 const Option=Select.Option;
 export default class User  extends Component{
     params={
         page:1
     }
     state={
         isVisible:false
     }
     formList=[
         {
             type:'INPUT',
             label:'用户名',
             filed:'user_name',
             placeholder:'请输入名称',
             width:80,
         },
         {
             type:'INPUT',
             label:'手机号',
             filed:'user_mobile',
             placeholder:'请输入名称',
             width:80,
         },
         {
             type:'DATE',
             label:'入职日期',
             filed:'user_time',
             placeholder:'亲选择日期',
             width:80,
         },
     ]
     handleFilter=(params)=>{
         this.params=params;
         this.request();
      }
     componentDidMount(){
         this.request();
     }
     request=()=>{
         let _this=this;
         axios.requestList(this,'/tableList',this.params)
     }
     openOrderDetail=(type)=>{
         console.log(type);
         if (type=="create") {
             this.setState({
                 type,
                 isVisible:true,
                 title:"创建员工"
             })

         }
      }
      handleSubmit=()=>{
          let type=this.state.type;
          let data=this.userForm.props.form.getFieldsValue();
          axios.ajax({
              url:"/userAdd",
              data:{
                  params:data
              }
          }).then((res)=>{
              if (res.code==="0") {
                  this.setState({
                      isVisible:false
                  })
                  this.request();
              }
          })
       }
     render(){
         const column=[
             {
              title: 'id',
              dataIndex:'id'
             },
             {
              title: '用户名',
              dataIndex:'userName'
             },
             {
             title: '性别',
             dataIndex:'sex',
             render(sex){
                 return sex===1?"男":"女"
             }
             },
             {
             title: '状态',
             dataIndex:'status',
             render(status){
                 let config={
                     '1':'咸鱼一条',
                     '2':'凤凰鸣',
                     '3':'无衣',
                     '4':'六六',
                 }
                 return config[status]
             }
             },
             {
             title: '爱好',
             dataIndex:'hobby',
             render(status){
                 let config={
                     '1':'游泳',
                     '2':'排布',
                     '3':'打球',
                     '4':'健身',
                 }
                 return config[status]
             }
             },
             {
             title: '生日',
             dataIndex:'birthday'
             },
             {
             title: '地址',
             dataIndex:'address'
             },
             {
             title: '早起时间',
             dataIndex:'time'
             }
     ]
          return (
            <div>
                <Card>
                    <Baseform formList={this.formList} filterSubmit={this.handleFilter}  />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" icon="plus" onClick={()=>this.openOrderDetail('create')}>添加员工</Button>
                    <Button type="primary" icon="edit" onClick={()=>this.openOrderDetail('edit')}>编辑员工</Button>
                    <Button type="primary" icon="plus" onClick={()=>this.openOrderDetail('detail')}>员工详情</Button>
                    <Button type="primary" icon="delete" onClick={()=>this.openOrderDetail('delete')}>删除员工</Button>
                </Card>
                <div className="content_wrap">
                    <Etable
                     updateSelectedItem={util.updateSelectedItem.bind(this)}
                     columns={column}
                     dataSource={this.state.list}
                     rowSelection="checkbox"
                     selectedIds={this.state.selectedIds}
                     selectItem={this.state.selectItem}
                     selectedRowKeys={this.state.selectedRowKeys}
                     pagination={this.state.pagination}
                     />
                </div>
                <Modal title={this.state.title} visible={this.state.isVisible}
                onOk={this.handleSubmit}
                onCancle={()=>{
                    this.setState({
                        isVisible:false
                    })
                }}
                width={600}
                >
                <UserForm type={this.state.type} wrappedComponentRef={(inst)=>this.userForm=inst}></UserForm>
                </Modal>
             </div>
         )
     }
 }
class UserForm extends Component{
    render(){
        const {getFieldDecorator} =this.props.form;
        const formitemLayout={
            labelCol:{span:5},
            wrapperCol:{span:15}
        }
        return(
            <Form layout="horizontal">
                <FormItem label="用户名" {...formitemLayout}>
                {
                    getFieldDecorator("user_name")(
                        <Input type="text" placeholder="请输入用户名" />
                    )
                }
                </FormItem>
                <FormItem label="性别" {...formitemLayout}>
                {
                    getFieldDecorator("sex")(
                        <RadioGroup>
                            <Radio value={1}>
                                男
                            </Radio>
                            <Radio value={2}>
                                女
                            </Radio>
                        </RadioGroup>
                    )
                }
                </FormItem>
                <FormItem label="状态" {...formitemLayout}>
                {
                    getFieldDecorator("status")(
                        <Select>
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                        <Option value={5}>5</Option>
                        </Select>
                    )
                }
                </FormItem>
                <FormItem label="生日" {...formitemLayout}>
                {
                    getFieldDecorator("birthday")(
                        <DatePicker />
                    )
                }
                </FormItem>
                <FormItem label="联系地址" {...formitemLayout}>
                {
                    getFieldDecorator("address")(
                        <TextArea row={3} placeholder="请输入联系地址"/>
                    )
                }
                </FormItem>
            </Form>
        )
    }
}
UserForm=Form.create({})(UserForm);
