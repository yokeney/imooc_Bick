import React,{Component} from "react";
import {Card,Button,Modal} from 'antd';
import Etable from '../../compoments/Etable'
import axios from './../../axios/index';
import util from '../../util/util';
 export default class PermissionUser  extends Component{
     state={
     }
     componentWillMount(){
         axios.requestList(this,'/role/list',{})
     }
     render(){
         const columns=[
             {
                 title:'角色ID',
                 dataIndex:'id'
             },
             {
                 title:'角色名称',
                 dataIndex:'role_name'
             },
             {
                 title:'创建时间',
                 dataIndex:'create_time'
             },
             {
                 title:'授权时间',
                 dataIndex:'authorize_time',
                 render:util.formateDate
             },
             {
                 title:'使用状态',
                 dataIndex:'status',
                 render(mode){
                     return mode==1?"已停":"未停"
                 }
             },
             {
                 title:'授权人',
                 dataIndex:'authorize_user_name'
             }
         ]
         return (
             <div>
                 <Card>
                     <Button type="primary" onClick={this.handleClearContent}>创建角色</Button>
                     <Button type="primary" onClick={this.handleGetContent}>设置权限</Button>
                     <Button type="primary" onClick={this.handleGetContent}>用户授权</Button>
                 </Card>
                 <Card>
                    <div className="content-wrap">
                        <Etable
                            columns={columns}
                            updateSelectedItem={util.updateSelectedItem.bind(this)}
                            selectItem={this.state.selectItem}
                            selectedRowKeys={this.state.selectedRowKeys}
                            dataSource={this.state.list}
                            pagination={false}
                        />
                    </div>
                 </Card>
             </div>

         )
     }
 }
