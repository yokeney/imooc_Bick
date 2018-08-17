import React,{Component} from "react";
import {Row,Col} from "antd";
import './index.less'
import util from '../../util/util'
// import axios from '../../axios'
 export default class Header extends Component{
 constructor(){
   super();
   }
   componentWillMount(){
     this.setState({
       username:'yoke'
     })
     setInterval(()=>{
      const sysTime=util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
     },1000)
   }
   // getWeatherAPIdata(){
   //   let city="深圳";
   //    axios.jsonp({
   //      url:'http://api.map.baidu.com/telematics/v3/weather?location='+city+'output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
   //    }).then((res)=>{
   //        if(res.status="success"){
   //          let data=res.results[0].weather_data[0];
   //          this.setState({
   //            data
   //          })
   //        }
   //    })
   // }
   render(){
     return (
            <div className="header">
              <Row className="header-top">
                <Col span="24"><span>欢迎， {this.state.username}</span><a href="#">退出</a></Col>
              </Row>
              <Row className="breadcrumb">
                <Col span="4" className="breadcrumb-title">首页</Col>
                <Col span="20" className="weather">
                  <span className="weather-date">{this.state.sysTime}</span>
                  <span className="weather-tatil"></span>
                </Col>
              </Row>
            </div>
     )
   }
 }
