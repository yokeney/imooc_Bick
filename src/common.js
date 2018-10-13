import React,{Component} from "react";
import {Row,Col} from 'antd'
import Header from './compoments/Header'
import './style/common.less'
 export default class Common extends Component{
   render(){
     return (
         <div>
             < Row className="container">
               <Header menuType="second"/>
             </Row>
             <Row>
               {this.props.children}
             </Row>
         </div>
     )
   }
 }
