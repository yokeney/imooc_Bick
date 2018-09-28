import React,{Component} from "react";
import {Card,Table,Modal,Button,message,Badge} from 'antd';
import axios from './../../axios/index';
import util from '../../util/util'
export default class HightTable extends Component{
    state={

    }
    params={
        page:1
    }

    componentDidMount(){
        this.request();
    }
    // 删除操作
    handleDelete = (item)=>{
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:`您确认要删除此条数据吗？${id}`,
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }
    request=()=>{
        let _this=this;
        axios.ajax({
            url:'/tableList',
            data:{
                params:{
                    page:this.params.page
                },
            }
        }).then((res)=>{
            if (res.code===0) {
                res.result.list.map((item,index)=>{
                    item.key=index;
                })
                this.setState({
                    dataSourse:res.result.list
                })
            }
        })
    }
    handleChange=(pagination,filter,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    render(){
        const colum=[
            {
             title: 'id',
             width:80,
             dataIndex:'id'
            },
            {
             title: '用户名',
             width:80,
             dataIndex:'userName'
            },
            {
            title: '性别',
            width:80,
            dataIndex:'sex',
            render(sex){
                return sex===1?"男":"女"
            }
            },
            {
            title: '状态',
            dataIndex:'status',
            width:80,
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
            width:80,
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
            width:80,
            dataIndex:'birthday'
            },
            {
            title: '地址',
            width:120,
            dataIndex:'address'
            },
            {
            title: '早起时间',
            width:80,
            dataIndex:'time'
            }
        ];
        const colum2=[
            {
             title: 'id',
             width:80,
             fixed:'left',
             dataIndex:'id'
            },
            {
             title: '用户名',
             width:80,
              fixed:'left',
             dataIndex:'userName'
            },
            {
            title: '性别',
            width:80,
            dataIndex:'sex',
            render(sex){
                return sex===1?"男":"女"
            }
            },
            {
            title: '状态',
            dataIndex:'status',
            width:80,
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
            width:80,
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
            width:80,
            dataIndex:'birthday'
            },
            {
            title: '地址',
            width:120,
            dataIndex:'address'
            },
            {
            title: '早起时间',
            width:80,
            dataIndex:'time'
            }
        ]
        const colum3=[
            {
             title: 'id',
             width:80,
             fixed:'left',
             dataIndex:'id'
            },
            {
             title: '用户名',
             width:80,
              fixed:'left',
             dataIndex:'userName'
            },
            {
            title: '性别',
            width:80,
            dataIndex:'sex',
            render(sex){
                return sex===1?"男":"女"
            }
            },
            {
             title: '年龄',
             width:80,
             dataIndex:'age',
             sorter:(a,b)=>{
                 return a.age-b.age
             },
             sortOrder:this.state.sortOrder
            },
            {
            title: '状态',
            dataIndex:'status',
            width:80,
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
            width:80,
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
            width:80,
            dataIndex:'birthday'
            },
            {
            title: '地址',
            width:120,
            dataIndex:'address'
            },
            {
            title: '早起时间',
            width:80,
            dataIndex:'time'
            }
        ]
        const colum4=[
            {
             title: 'id',
             width:80,
             fixed:'left',
             dataIndex:'id'
            },
            {
             title: '用户名',
             width:80,
              fixed:'left',
             dataIndex:'userName'
            },
            {
            title: '性别',
            width:80,
            dataIndex:'sex',
            render(sex){
                return sex===1?"男":"女"
            }
            },
            {
             title: '年龄',
             width:80,
             dataIndex:'age',
             sorter:(a,b)=>{
                 return a.age-b.age
             },
             sortOrder:this.state.sortOrder
            },
            {
            title: '状态',
            dataIndex:'status',
            width:80,
            render(status){
                let config={
                    '1':'无伤',
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
            width:80,
            render(status){
                let config={
                    '1':<Badge status="success" text="游泳"/>,
                    '2':<Badge status="error" text="排布"/>,
                    '3':<Badge status="default" text="打球"/>,
                    '4':<Badge status="processing" text="健身"/>,
                }
                return config[status]
            }
            },
            {
            title: '生日',
            width:80,
            dataIndex:'birthday'
            },
            {
            title: '地址',
            width:120,
            dataIndex:'address'
            },
            {
                title: '操作',
                width:80,
                render:(text,item)=>{
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                }
            }

        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table columns={colum}
                     dataSource={this.state.dataSourse}
                      bordered
                      pagination={false}
                      scroll={{y:240}}
                       />
                </Card>
                <Card title="左侧固定" style={{marginTop:20}}>
                    <Table columns={colum2}
                    dataSource={this.state.dataSourse}
                     bordered
                     pagination={false}
                     scroll={{x:2000}}
                      />
                </Card>
                <Card title="排序" style={{marginTop:20}}>
                    <Table columns={colum3}
                    dataSource={this.state.dataSourse}
                     bordered
                     pagination={false}
                     onChange={this.handleChange}
                      />
                </Card>
                <Card title="操作按钮" style={{marginTop:20}}>
                    <Table columns={colum4}
                    dataSource={this.state.dataSourse}
                     bordered
                     pagination={false}
                      />
                </Card>
            </div>
        )
    }
}
