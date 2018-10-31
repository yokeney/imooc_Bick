 import React,{Component} from "react";
 import {Card,Button} from "antd"
 import util from "../../util/util"
 import Baseform from "../../compoments/baseForm"
 import axios from "./../../axios/index"
 import Etable from "../../compoments/Etable"
 export default class User  extends Component{
     params={
         page:1
     }
     state={}
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
             </div>
         )
     }
 }
