import React,{Component} from "react";
import {Card,Button,Table,Form,Select} from 'antd';
import axios from './../../axios/index';
import util from '../../util/util';
const FormItem=Form.Item;
const Option=Select.Option;
 export default class City  extends Component{
     state={
         list:[]
     }
     params={
         page:1
     }
     componentDidMount(){
         this.requestList();
     }
     //接口数据
     requestList=()=>{
         let _this=this;
         axios.ajax({
             url:'/dataList',
             data:{
                 params:{
                     page:this.params.page
                 }
             }
         }).then((res)=>{
                 console.log(res.result);
                 this.setState({
                 list:res.result.item_list.map((item,index)=>{
                     item.key=index;
                     return item;
                 }),
                 pagination:util.pagination(res,(current)=>{
                     _this.params.page=current;
                     _this.requestList();
                 })
             })
         })
      }
     //开通城市
     handleOpen=()=>{

      }
     render(){
         const column=[
             {
                 'title':"城市id",
                 dataIndex:'id',
             },
             {
                 'title':"城市名称",
                 dataIndex:'name',
             },
             {
                 'title':"用车模式",
                 dataIndex:'mode',
             },
             {
                 'title':"运营模式",
                 dataIndex:'op_mode',
             },
             {
                 'title':"授权加盟商",
                 dataIndex:'franchisee_name',
             },
             {
                 'title':"城市管理员",
                 dataIndex:'city_admin',
                 render(arr){
                     return arr.map((item,index)=>{
                         return item.user_name
                     }).join(",");
                 }
             },
             {
                 'title':"城市开通时间",
                 dataIndex:'open_time',
             },
             {
                 'title':"操作时间",
                 dataIndex:'update_time',
             },
             {
                 'title':"操作人",
                 dataIndex:'sys_name',
             },

         ]
         return (
             <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOpen}>开通城市</Button>
                </Card>
                <div className="content_wrap">
                    <Table columns={column} bordered dataSource={this.state.list} pagination={this.state.pagination}></Table>
                </div>
             </div>
         )
     }
 }
class FilterForm extends Component{
    render(){
        const  {getFieldDecorator} =this.props.form;
        return(
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">深圳</Option>
                                <Option value="2">广州</Option>
                                <Option value="3">兴宁</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="停车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点模式</Option>
                                <Option value="2">警车模式</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="运营模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    <Button type="primary" style={{marginLeft:20 }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm=Form.create({})(FilterForm);
