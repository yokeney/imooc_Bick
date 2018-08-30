import React,{Component} from "react";
import {Card,Button,Spin,Icon,Alert} from 'antd'
 export default class Loading extends Component{
     render(){
         const icon=<Icon type="loading" style={{fontSize:20}}/>
         return (
            <div>
                <Card
                    title="Spin的用法" class="wrap-card">
                    <Spin size="small" />
                    <Spin style={{margin:'0 10px'}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon}/>
                </Card>
                <Card title="内容遮罩" className="wrap-card">
                    <Alert message="react" description="欢迎来到react高级教程" type="info"></Alert>
                    <Spin>
                        <Alert message="react" description="欢迎来到react高级教程" type="warning"></Alert>
                    </Spin>
                    <Spin tip="加载中...." indicator={icon}>
                        <Alert message="react" description="欢迎来到react高级教程" type="warning"></Alert>
                    </Spin>
                </Card>
            </div>
         )
     }
 }
