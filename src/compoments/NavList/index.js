import React,{Component} from "react";
import menuList from '../../config/menuConfig'
import {NavLink} from "react-router-dom"
import {Menu} from 'antd'
import {connect} from 'react-redux'
import {switchMenu} from './../../redux/action/index'
import './index.less'
const SubMenu=Menu.SubMenu
// const MenuItemGroup=Menu.ItemGroup
 class NavList extends Component{
   state={
       currentKey:''
   }
   handleClick = ({ item ,key})=>{
         const { dispatch } = this.props;
         dispatch(switchMenu(item.props.title))
         this.setState({
             currentKey:key
         })
     }
   componentWillMount(){
     const  meneuTreeNode=this.renderMenu(menuList);
     let currentKey=window.location.hash.replace(/#|\?.*$/g,'');
     this.setState({
       currentKey,
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
          return <Menu.Item  title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
          </Menu.Item>
        })
   }
   render(){
     return (
            <div>
              <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Immoc MS</h1>
              </div>
              <Menu theme="dark" selectedKeys={this.state.currentKey} onClick={this.handleClick}>
                {this.state.meneuTreeNode}
              </Menu>
            </div>
     )
   }
 }
 export default connect()(NavList);
