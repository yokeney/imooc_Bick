import React,{Component} from "react";
import {Row,Col} from 'antd'
import Header from './compoments/Header'
import Footer from './compoments/Footer'
import NavList from './compoments/NavList'
import Home from './page/Home'
import './style/common.less'
 export default class Admin extends Component{
   render(){
     return (
          < Row className="container">
          <Col span="3" className="main">
              <NavList />
            </Col>
          <Col span="21">
              <Header>Header</Header>
                <Row className="content">
                  {this.props.children}
                </Row>
              <Footer>Footer</Footer>
            </Col>
          </Row>
     )
   }
 }
