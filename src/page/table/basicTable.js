import React,{Component} from "react";
 import {Card,Table} from 'antd';
 export default class BasicTable extends Component{
     state={
         data:[]
     }
     componentDidMount(){
         const data1=[
             {
                 id:'0',
                 userName:'yoke',
                 sex:'男',
                 hobby:'篮球',
                 birthday:'1993',
                 address:'广东深圳',
                 time:'09',
             },
             {
                 id:'1',
                 userName:'jack',
                 sex:'女',
                 hobby:'篮球',
                 birthday:'1993',
                 address:'广东深圳',
                 time:'09',
             },
             {
                 id:'3',
                 userName:'Neck',
                 sex:'女',
                 hobby:'排球',
                 birthday:'1992',
                 address:'广东深圳',
                 time:'09',
             }
         ]
         this.setState({
             dataSourse:data1
         })
     }
 constructor(){
     super();

     }
     render(){
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
            dataIndex:'sex'
            },
            {
            title: '爱好',
            dataIndex:'hobby'
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
                    <Table columns={colum} dataSource={this.state.dataSourse} bordered pagination={false} />
                </Card>
             </div>
         )
     }
 }