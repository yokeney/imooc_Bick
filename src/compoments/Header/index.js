import React,{Component} from "react";
import {Row,Col} from "antd";
import './index.less'
import {connect} from 'react-redux'
import util from '../../util/util'
// import axios from '../../axios'
 class Header extends Component{
     state={}
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
    const menuType=this.props.menuType;
      return (
            <div className="header">
              <Row className="header-top">
              {
                  menuType?
                  <Col span="6" className="logod">
                  <img src="/assets/logo-ant.svg" alt=""/>
                  <span>IMooc通用管理器</span>
                  </Col>:''

              }
                <Col span={menuType?18:24}><span>欢迎， {this.state.username}</span><a href="http://www.baidu.com">退出</a></Col>
              </Row>
              {
                menuType?'': <Row className="breadcrumb">
                   <Col span="4" className="breadcrumb-title">{this.props.menuName}</Col>
                   <Col span="20" className="weather">
                     <span className="weather-date">{this.state.sysTime}</span>
                     <span className="weather-tatil">多云转晴</span>
                   </Col>
                 </Row>
              }
            </div>
     )
   }
 }
 const mapStateToProps = state => {
    return {
        menuName:state.menuName
    }
}
export default connect(mapStateToProps)(Header);
