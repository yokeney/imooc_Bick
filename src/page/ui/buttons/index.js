import React,{Component} from "react";
import {Card, Button,Icon,Radio} from 'antd'
import './index.less'
 export default class Buttons extends Component{
     constructor(){
         super();
         this.state={
             loading:true,
             size:"default"
         }
     }
     handlecloseLoading=()=>{
         this.setState({
                loading:!this.state.loading
         })
      }
      handleChange=(e)=>{
          this.setState({
              size:e.target.value
          })
       }
      render(){
         const ButtonGroup = Button.Group;
         return (
                <div>
                    <Card title="基础按钮">
                        <Button type="primary">imooc</Button>
                        <Button type="dashed">imooc</Button>
                        <Button>imooc</Button>
                        <Button type="danger">imooc</Button>
                        <Button disabled>imooc</Button>
                    </Card>
                    <Card title="图形按钮">
                        <Button icon="plus">创建</Button>
                        <Button icon="edit" type="dashed">编辑</Button>
                        <Button icon="delete">删除</Button>
                        <Button type="danger" icon="search" shape="circle"></Button>
                        <Button type="priamry" icon="download">下载</Button>
                        <ButtonGroup>
                            <Button type="primary">
                                <Icon type="left" />Backward
                            </Button>
                            <Button type="primary">
                                Forward<Icon type="right" />
                            </Button>
                        </ButtonGroup>
                    </Card>
                    <Card title="Loading按钮">
                        <Button loading={this.state.loading}>创建</Button>
                        <Button shape="circle" loading={this.state.loading} type="priamry"></Button>
                        <Button loading={this.state.loading}>点击按钮</Button>
                        <Button type="danger" shape="circle" loading={this.state.loading}></Button>
                        <Button type="priamry" onClick={this.handlecloseLoading}>关闭</Button>
                    </Card>
                    <Card title="尺寸">
                        <Radio.Group onChange={this.handleChange}>
                            <Radio value="small"> 小</Radio>
                            <Radio value="default">中</Radio>
                            <Radio value="large"> 大</Radio>
                        </Radio.Group>
                        <Button type="primary" size={this.state.size}>imooc</Button>
                        <Button type="dashed" size={this.state.size}>imooc</Button>
                        <Button type="danger" size={this.state.size}>imooc</Button>
                    </Card>
                </div>
         )
     }
 }
