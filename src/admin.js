import React,{Component} from "react";
import {Row,Col} from 'antd'
import Header from './compoments/Header'
import Footer from './compoments/Footer'
 export default class Admin extends Component{
 constructor(){
   super();

   }
   render(){
     return (
          <Row>
          <Col span="3">
              lwft
            </Col>
          <Col span="21">
              <Header>Header</Header>
                <Row>
                  content
                </Row>
              <Footer>Footer</Footer>
            </Col>
          </Row>
     )
   }
 }
