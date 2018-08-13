import React,{Component} from "react";
import menuList from '../../config/menuConfig'
import {Menu,Icon} from 'antd'
import './index.less'
const SubMenu=Menu.SubMenu
const MenuItemGroup=Menu.ItemGroup
 export default class NavList extends Component{
 constructor(){
   super();

   }
   render(){
     return (
            <div>
              <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Immoc MS</h1>
              </div>
              <Menu theme="dark">
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                  <MenuItemGroup title="Item 1">
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            </div>
     )
   }
 }
