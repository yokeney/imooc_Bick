import React,{Component} from "react";
import {Card,Form,Button,Input,message,Icon,Checkbox} from 'antd';
const FormItem=Form.Item;
 class Logins extends Component{
     handleSubmit=()=>{
         let userinfo=this.props.form.getFieldsValue();
            this.props.form.validateFields((err,values)=>{
             if (!err) {
                 message.success(`${userinfo.userName} 恭喜通过`)
             }
         });
     }
     render(){
         const { getFieldDecorator}=this.props.form;
         return (
            <div>
            <Card title="登陆行内表单 ">
               <Form layout="inline">
                   <FormItem>
                       <Input placeholder="请输入用户名"/>
                   </FormItem>
                   <FormItem>
                       <Input placeholder="请输入密码"/>
                   </FormItem>
                   <FormItem>
                       <Button>登陆</Button>
                   </FormItem>
               </Form>
            </Card>
            <Card title="登陆垂直方向" style={{marginTop:10}}>
                <Form style={{width:200}}>
                    <FormItem>
                    {
                        getFieldDecorator('userName',{
                            rules:[{
                                required:true,
                                message:'用户名不能为空'
                            },
                            {
                                min:5,
                                max:10,
                                message:"请输入5-10个字符"
                            },
                        ]
                    })(<Input prefix={<Icon type='user' />} placeholder="请输入用户名"/>)
                    }
                    </FormItem>
                    <FormItem>
                    {
                        getFieldDecorator('userPwd',{
                            rules:[]
                        })(<Input prefix={<Icon type='lock' />} placeholder="请输入密码"/>)
                    }
                    </FormItem>
                    <FormItem>
                    {
                        getFieldDecorator('remenber',{
                            valuePropName:'checked',
                            initialValue:true,
                        })(
                            <Checkbox>记住密码</Checkbox>
                        )
                    }
                    <a href="http://www.baidu.com" style={{float:'right'}}>忘记密码？</a>
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.handleSubmit} style={{float:'left',marginLeft:'0'}}>登陆</Button>
                        <Button onClick={this.handleSubmit} style={{float:'right'}}>注册</Button>
                    </FormItem>
                </Form>
            </Card>
            </div>
         )
     }
 }
export default Form.create()(Logins)
