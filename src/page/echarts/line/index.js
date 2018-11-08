import React,{Component} from "react";
import {Card} from 'antd';
// import echarts from 'echarts';
//按需加载
import echartTheme from './themeLight'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
 export default class Line  extends Component{
     componentWillMount(){
         echarts.registerTheme('imooc',echartTheme);
     }
     getOption2= ()=>{
         let option={
             title:{
                 text:"用户骑行订单"
             },
             tooltip:{
                trigger:'axis',
            },
            yAxis:{
                type:'value'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
             series:[
                { name:'订单量',
                 type:'line',
                 data:[
                     1000,2000,3000,4000,5000,6000,7000
                 ]
             }
             ]
         }
         return option;
     }
     getOption= ()=>{
         let option={
             title:{
                 text:"用户骑行订单"
             },
             legend:{
                 data:['ofo订单量','膜拜订单量']
             },
             tooltip:{
                trigger:'axis',
            },
            yAxis:{
                type:'value'
            },
            xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
            },
             series:[
                { name:'ofo订单量',
                 type:'line',
                 data:[
                     1000,2000,3000,4000,5000,6000,7000
                 ]
             },
                { name:'膜拜订单量',
                 type:'line',
                 data:[
                     600,1000,1000,3000,2000,2000,5000
                 ]
             }
             ]
         }
         return option;
     };
     getOption3= ()=>{
         let option={
             title:{
                 text:"用户骑行订单"
             },
             legend:{
                 data:['ofo订单量','膜拜订单量']
             },
             tooltip:{
                trigger:'axis',
            },
            yAxis:{
                type:'value',
            },
            xAxis:{
                type:'category',
                boundaryGap:'false',
                data:['周一','周二','周三','周四','周五','周六','周日'],
            },
             series:[
                {
                 name:'膜拜订单量',
                 type:'line',
                 areaStyle:{},
                 data:[
                     600,1000,1000,3000,2000,2000,5000
                 ]
             }
             ]
         }
         return option;
     }
     render(){
         return (
             <div>
             <Card title="折线图表之一" style={{marginTop:10}}>
                <ReactEcharts option={this.getOption2()}  theme='imooc' style={{height:500}}/>
             </Card>
             <Card title="折线图表之二" style={{marginTop:10}}>
                <ReactEcharts option={this.getOption()}  theme='imooc' style={{height:500}}/>
             </Card>
             <Card title="折线图表之三" style={{marginTop:10}}>
                <ReactEcharts option={this.getOption3()}  theme='imooc' style={{height:500}}/>
             </Card>
             </div>
         )
     }
 }
