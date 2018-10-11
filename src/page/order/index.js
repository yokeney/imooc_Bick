import React,{Component} from "react";
import {Card,Button,Table,Form,Select,Modal,message,DatePicker} from 'antd';
import axios from './../../axios/index';
import util from '../../util/util';
 const FormItem=Form.Item;
 const Option=Select.Option;
 export default class Order extends Component{
     state={
     }
     params={
         page:1
     }
     componentDidMount(){
         this.request();
     }
     request=()=>{
         let _this=this;
         axios.ajax({
             url:'/OrderList',
             data:{
                 params:{
                     page:this.params.page
                 }
             }
         }).then((res)=>{
                this.setState({
                    list:res.result.item_List.map((item,index)=>{
                        item.key=index
                        return item;
                    }),
                    pagination:util.pagination(res,(current)=>{
                       _this.params.page=current;
                       _this.request();
                    })
                })
         })
     }
     render(){
         const columns=[
             {
                 title:'订单编号',
                 dataIndex:'order_sn'
             },
             {
                 title:'车辆编号',
                 dataIndex:'bike_sn'
             },
             {
                 title:'用户名',
                 dataIndex:'user_name'
             },
             {
                 title:'手机号',
                 dataIndex:'mobile'
             },
             {
                 title:'里程',
                 dataIndex:'distance'
             },
             {
                 title:'行驶时长',
                 dataIndex:'totle_time'
             },
             {
                 title:'状态',
                 dataIndex:'status',
                 render(mode){
                     return mode==1?"已停":"未停"
                 }
             },
             {
                 title:'开始时间',
                 dataIndex:'start_time'
             },
             {
                 title:'结束时间',
                 dataIndex:'end_time'
             },
             {
                 title:'订单金额',
                 dataIndex:'totle_fee'
             },
             {
                 title:'实付金额',
                 dataIndex:'user_pay'
             }
         ]
         return (
             <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button>订单详情</Button>
                    <Button>结束订单</Button>
                </Card>
                <div className="content_wrap">
                    <Table
                      columns={columns}
                      bordered
                      dataSource={this.state.list}
                      pagination={this.state.pagination}
                      />
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
                         getFieldDecorator('city_id',{})(
                             <Select placeholder="全部" style={{width:80}}>
                                 <Option value="">全部</Option>
                                 <Option value="1">深圳</Option>
                                 <Option value="2">广州</Option>
                                 <Option value="3">兴宁</Option>
                             </Select>
                         )
                     }
                 </FormItem>
                 <FormItem label="订单时间">
                     {
                         getFieldDecorator('start_time',{})(
                             <DatePicker showTime />
                         )
                     }
                     {
                         getFieldDecorator('end_time',{})(
                             <DatePicker style={{marginLeft:20}} showTime />
                         )
                     }
                 </FormItem>
                 <FormItem label="订单状态">
                     {
                         getFieldDecorator('status',{})(
                             <Select placeholder="全部" style={{width:80}}>
                                 <Option value="">全部</Option>
                                 <Option value="1">进行中</Option>
                                 <Option value="2">结束行程</Option>
                             </Select>
                         )
                     }
                 </FormItem>
                 <FormItem>
                     <Button type="primary" style={{marginLeft:20 }}>查询</Button>
                     <Button type="primary">重置</Button>
                 </FormItem>
             </Form>
         )
     }
 }
 FilterForm=Form.create({})(FilterForm);
