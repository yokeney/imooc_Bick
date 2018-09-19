import React,{Component} from "react";
 import {Card,Table,Modal} from 'antd';
 import axios from './../../axios/index';
 export default class BasicTable extends Component{
     state={
         dataSourse2:[]
     }
     onRowClick=(record,index)=>{
         let SelectKey=[index];
         Modal.info({
             title:'信息',
             content:`用户名${record.userName}`
         })
         console.log(SelectKey,record);
         this.setState({
             selectedRowKeys:SelectKey,
             selectItem:record
         })
     }
     componentDidMount(){
         const data1=[
             {
                 id:'0',
                 userName:'yoke',
                 sex:1,
                 status:1,
                 hobby:2,
                 birthday:'1993',
                 address:'广东深圳',
                 time:'09',
             },
             {
                 id:'1',
                 userName:'jack',
                 sex:0,
                 status:1,
                 hobby:3,
                 birthday:'1993',
                 address:'广东深圳',
                 time:'09',
             },
             {
                 id:'3',
                 userName:'Neck',
                 sex:1 ,
                 status:2,
                 hobby:1,
                 birthday:'1992',
                 address:'广东深圳',
                 time:'09',
             }
         ];
         data1.map((item,index)=>{
             item.key=index;
         })
         this.setState({
             dataSourse:data1
         })
         this.request();
     }
     request=()=>{
         axios.ajax({
             url:'/tableList',
             data:{
                 params:{
                     page:1
                 },
             }
         }).then((res)=>{
             if (res.code===0) {
                 this.state.dataSourse2.map((item,index)=>{
                     item.key=index;
                 })
                 this.setState({
                     dataSourse2:res.result.list
                 })
             }
         })
     }
     render(){
         const {selectedRowKeys}=this.state;
         console.log(selectedRowKeys);
         const rowSelection={
             type:'radio',
             selectedRowKeys
         };
        const colum=[
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
                <Card title="基础表格">
                    <Table columns={colum}
                     dataSource={this.state.dataSourse}
                      bordered
                      pagination={false} />
                </Card>
                <Card title="动态数据表格" style={{marginTop:20}}>
                    <Table columns={colum}
                    dataSource={this.state.dataSourse2}
                     bordered
                     pagination={false} />
                </Card>
                <Card title="mock-单选表格" style={{marginTop:20}}>
                    <Table columns={colum}
                    rowSelection={rowSelection}
                    onRow={(record,index) => {
                        return {
                          onClick: () => {
                              this.onRowClick(record,index)
                          },       // 点击行
                        };
                      }}
                    dataSource={this.state.dataSourse2}
                    bordered pagination={false}
                     />
                </Card>
             </div>
         )
     }
 }
