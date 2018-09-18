import React,{Component} from "react";
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,InputNumber,Icon,message} from 'antd'
import moment from 'moment'
 const FormItem=Form.Item;
 const TextArea=Input.TextArea;
const Option = Select.Option;
 class FormRegister  extends Component{
     state = {
        loading: false,
     };
     handleSubmit=()=>{
           let userinfo=this.props.form.getFieldsValue();
           console.log(JSON.stringify(userinfo));
           message.success(`${userinfo.userName}恭喜你注册成功`)
     }
     getBase64=(img, callback)=>{
          const reader = new FileReader();
          reader.addEventListener('load', () => callback(reader.result));
          reader.readAsDataURL(img);
        }
     handleChange = (info) => {
         if (info.file.status === 'uploading') {
             this.setState({ loading: true });
        return;
   }
   if (info.file.status === 'done') {
     // Get this url from response in real world.
     this.getBase64(info.file.originFileObj, imageUrl => this.setState({
       userImg:imageUrl,
       loading: false,
     }));
   }
 }
     render(){
         const { getFieldDecorator}=this.props.form;
         const formItemLayout={
             labelCol:{
                 xs:24,
                 sm:4
             },
             wrapperCol:{
                 xs:24,
                 sm:12
             }
         }
         const offersetLayout={
             wrapperCol:{
                 xs:24,
                 sm:{
                     span:12,
                     offset:4,
                 }
             }
         }
         return (
             <div>
                <Card title="注册表单">
                    <Form layout="horizontal" >
                        <FormItem  label="用户名" {...formItemLayout}>
                        {
                            getFieldDecorator('userName',{
                                // initialValue:'yoke',
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
                        })(<Input  placeholder="请输入用户名"/>)
                        }
                        </FormItem>
                        <FormItem  label="密码" {...formItemLayout}>
                        {
                            getFieldDecorator('userpwd',{
                                // initialValue:'yoke',
                                rules:[{
                                     required:true,
                                    message:'密码不能为空'
                                },
                            ]
                        })(<Input type="password"  placeholder="请输入密码"/>)
                        }
                        </FormItem>
                        <FormItem  label="性别" {...formItemLayout}>
                        {
                            getFieldDecorator('sex',{
                                initialValue:'1',
                        })(
                            <Radio.Group>
                              <Radio value="1">男</Radio>
                              <Radio value="2">女</Radio>
                            </Radio.Group>
                        )
                        }
                        </FormItem>
                        <FormItem  label="年龄" {...formItemLayout}>
                        {
                            getFieldDecorator('age',{
                                initialValue:'18',
                        })(
                            <InputNumber></InputNumber>
                        )
                        }
                        </FormItem>
                        <FormItem  label="当前状态" {...formItemLayout}>
                        {
                            getFieldDecorator('statue',{
                                initialValue:'18',
                        })(
                            <Select>
                                <Option value="咸鱼一条">咸鱼一条</Option>
                                <Option value="风华浪子">风华浪子</Option>
                                <Option value="北大才子一枚">北大才子一枚</Option>
                                <Option value="百度fE">百度fE</Option>
                                <Option value="创业者">创业者</Option>
                            </Select>
                        )
                        }
                        </FormItem>
                        <FormItem  label="爱好" {...formItemLayout}>
                        {
                            getFieldDecorator('hobby',{
                                initialValue:['2','5'],
                        })(
                            <Select mode="multiple">
                                <Option value="游泳">游泳</Option>
                                <Option value="打篮球">打篮球</Option>
                                <Option value="排球">排球</Option>
                                <Option value="跑步">跑步</Option>
                                <Option value="爬山">爬山</Option>
                            </Select>
                        )
                        }
                        </FormItem>
                        <FormItem  label="是否已婚" {...formItemLayout}>
                        {
                            getFieldDecorator('isMarried',{
                                valuePropsName:'checked',
                                initialValue:true,
                        })(
                            <Switch></Switch>
                        )
                        }
                        </FormItem>
                        <FormItem  label="生日" {...formItemLayout}>
                        {
                            getFieldDecorator('Birthday',{
                                initialValue:moment(new Date()),
                        })(
                            <DatePicker showTime format="YYYY-MM-DD HH-mm-ss"></DatePicker>
                        )
                        }
                        </FormItem>
                        <FormItem  label="联系地址" {...formItemLayout}>
                        {
                            getFieldDecorator('adress',{
                                initialValue:'广东深圳南山区'
                            })(
                                <TextArea  autosize={{minRows:4,maxRows:6}}/>
                        )
                        }
                        </FormItem>
                        <FormItem  label="早起时间" {...formItemLayout}>
                        {
                            getFieldDecorator('time')(
                                <TimePicker/>
                        )
                        }
                        </FormItem>
                        <FormItem  label="头像" {...formItemLayout}>
                        {
                            getFieldDecorator('userImg')(
                                <Upload
                                 listType="picture-card"
                                 showUploadList={false}
                                 action="//jsonplaceholder.typicode.com/posts/"
                                 onChange={this.handleChange}
                                >
                                    {
                                        this.state.userImg?<img src={this.state.userImg} alt=""/>:<Icon type="plus"/>
                                    }
                                </Upload>
                        )
                        }
                        </FormItem>
                        <FormItem  {...offersetLayout} >
                        {
                            getFieldDecorator('yes')(
                                <Checkbox>我已同意</Checkbox>
                        )
                        }
                        </FormItem>
                        <FormItem  {...offersetLayout} >
                                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
             </div>
         )
     }
 }
export default  Form.create()(FormRegister)
