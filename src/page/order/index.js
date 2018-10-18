import React,{Component} from "react";
import {Card,Button,Table,Form,Select,Modal,message,DatePicker} from 'antd';
import axios from './../../axios/index';
import Baseform from '../../compoments/baseForm'
import util from '../../util/util';
 const FormItem=Form.Item;
 const Option=Select.Option;
 export default class Order extends Component{
     state={
     }
     params={
         page:1
     }

     formList=[
         {
             type:'SELECT',
             label:'城市',
             filed:'city',
             placeholder:'全部',
             initialValue:'全部',
             width:100,
             list:[
                 {
                     id:0,
                     name:'全部'
                 },
                 {
                     id:1,
                     name:'深圳'
                 },
                 {
                     id:2,
                     name:'上海'
                 }
             ]
         },
         {
             type:'时间查询'
         },
         {
             type:'SELECT',
             label:'订单状态',
             filed:"status",
             placeholder:'全部',
             initialValue:'全部',
             width:100,
             list:[
                 {
                     id:0,
                     name:'全部'
                 },
                 {
                     id:1,
                     name:'进行中'
                 },
                 {
                     id:2,
                     name:'已完成'
                 }
             ]
         }
     ]
     componentDidMount(){
         this.request();
     }
     handleFilter=(params)=>{
         this.params=params;
         this.request();
      }
      reset=()=>{
          this.props.form.resetFields();
       }
     request=()=>{
         let _this=this;
         axios.requestList(this,'/OrderList',this.params)
     }
     openOrderDetail=()=>{
         let item =this.state.selectedItem;
         console.log(this.state.selectedItem)
         if (!item) {
             Modal.info({
                 title: '信息',
                 content: '请先选择一条订单'
             })
             return;
         }
         window.open(`/#/common/order/detail/${item[0].id}`,'_blank')
     }
    render(){
         const {selectedRowKeys}=this.state;
          console.log(selectedRowKeys);
         const rowCheckSelection={
             type:'radio',
             selectedRowKeys,
             onChange:((selectedRowKeys,selectedRows)=>{
                  this.setState({
                      selectedRowKeys,
                      selectedItem:selectedRows
                  })
             })
         }
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
                    <Baseform formList={this.formList} filterSubmit={this.handleFilter} />
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content_wrap">
                    <Table
                      columns={columns}
                      bordered
                      dataSource={this.state.list}
                      rowSelection={rowCheckSelection}
                      pagination={this.state.pagination}
                      />
                </div>
             </div>
         )
     }
 }
