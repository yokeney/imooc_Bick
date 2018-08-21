import React,{Component} from "react";
import menuList from '../../config/menuConfig'
import {Menu,Icon} from 'antd'
import './index.less'
const SubMenu=Menu.SubMenu
const MenuItemGroup=Menu.ItemGroup
 export default class NavList extends Component{
   componentWillMount(){
     const  meneuTreeNode=this.renderMenu(menuList);
     this.setState({
       meneuTreeNode
     })
   }
   renderMenu=(data)=>{
        return data.map((item)=>{
          if (item.children) {
            return (
              <SubMenu title={item.title} key={item.key}>
              {this.renderMenu(item.children)}
              </SubMenu>
            )
          }
          return <Menu.Item  title={item.title} key={item.key}>{item.title}</Menu.Item>
        })
   }
   render(){
     return (
            <div>
              <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Immoc MS</h1>
              </div>
              <Menu theme="dark">
                {this.state.meneuTreeNode}
              </Menu>
            </div>
     )
   }
 }
