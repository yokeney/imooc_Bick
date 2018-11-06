import React,{Component} from "react";
import { Input, Select, Form, Button, Checkbox, Radio, DatePicker} from 'antd'
import util from '../../util/util'
const FormItem=Form.Item;
const Option= Select.Option;
class Baseform extends React.Component{
    handleFilterSubmit=()=>{
        let filedValue=this.props.form.getFieldsValue();
        this.props.filterSubmit(filedValue)
     }
    initFlormList=()=>{
        const {getFieldDecorator}=this.props.form;
        const formList=this.props.formList;
        const FormItemList=[];
        if (formList && formList.length>0) {
            formList.forEach((item,index)=>{
                let label=item.label;
                let filed=item.filed;
                let initialValue=item.initialValue||'';
                let placeholder=item.placeholder;
                let width=item.width;
                if (item.type=='时间查询') {
                    const begin_time=<FormItem label='订单时间' key={filed}>
                    {
                        getFieldDecorator(['begin_time'])(
                            <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD hh-ss-mm"/>
                        )
                    }
                    </FormItem>
                    FormItemList.push(begin_time)

                    const end_time=<FormItem label='~'  colon={false} key={filed}>
                    {
                        getFieldDecorator(['end_time'])(
                            <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD hh-ss-mm"/>
                        )
                    }
                    </FormItem>
                    FormItemList.push(end_time)
                }
                 else if (item.type==="INPUT") {
                    const INPUT=<FormItem label={label} key={filed}>
                    {
                        getFieldDecorator([filed],{
                            initialValue:initialValue
                        })(
                            <Input type="text" placeholder={placeholder}/>
                        )
                    }
                    </FormItem>
                    FormItemList.push(INPUT)
                }
                else if (item.type==="SELECT") {
                    const SELECT=<FormItem label={label} key={filed}>
                    {
                        getFieldDecorator([filed],{
                            initialValue:initialValue
                        })(
                            <Select placeholder={placeholder} style={{width:width}}>
                                {util.getOptionList(item.list)}
                            </Select>
                        )
                    }
                    </FormItem>
                    FormItemList.push(SELECT)
                }
                else if (item.type==="城市") {
                    const SELECT=<FormItem label={"城市"} key={filed}>
                    {
                        getFieldDecorator("city",{
                            initialValue:"0"
                        })(
                            <Select placeholder={placeholder} style={{width:width}}>
                                {util.getOptionList([{id:0,name:"全部"},{id:1,name:"北京"},{id:2,name:"上海"},{id:3,name:"广东"},{id:4,name:"杭州"}])}
                            </Select>
                        )
                    }
                    </FormItem>
                    FormItemList.push(SELECT)
                }
                else if (item.type==="CHECKBOX") {
                    const CHECKBOX=<FormItem label={label} key={filed}>
                    {
                        getFieldDecorator([filed],{
                            ValuePropName:'checked',
                            initialValue:initialValue //true OR false
                        })(
                            <Checkbox>
                                {label}
                            </Checkbox>
                        )
                    }
                    </FormItem>
                    FormItemList.push(CHECKBOX)

                }
                else if (item.type==="DATE") {
                    const DATE=<FormItem label={label} key={filed}>
                    {
                        getFieldDecorator([filed])(
                            <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD hh-ss-mm"/>
                        )
                    }
                    </FormItem>
                    FormItemList.push(DATE)

                }
            })
        }
        return FormItemList
     }
     reset=()=>{
         this.props.form.resetFields();
      }
     render(){
         return (
            <Form layout="inline">
                {
                    this.initFlormList()
                }
                <FormItem>
                    <Button type="primary" style={{marginLeft:20 }} onClick={this.handleFilterSubmit}>查询</Button>
                    <Button type="primary" onClick={this.reset}>重置</Button>
                </FormItem>
            </Form>
         )
     }
 }
export default Form.create({})(Baseform);
