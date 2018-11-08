import React,{Component} from "react";
import {Card} from 'antd';
// import echarts from 'echarts';
//按需加载
import echartTheme from './echartTheme'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
 export default class Bar extends Component{
     componentWillMount(){
         echarts.registerTheme('imooc',echartTheme);
     }
     getOption2= ()=>{
         let option2={
             title:{
                 text:'用户骑行订单'
             },
             xAxis:{
                 data:['周一','周额','周三','周四','周五','周六','周日']
             },
             yAxis:{
                 type:'value'
             },
             tooltip:{
                 trigger:'axis'
             },
             legend:{
                data:['OFO','膜拜','小蓝']
             },
             series:[{
                 name:'OFO',
                 type:'bar',
                 data:[1000,2000,1000,4000,3000,6000,4000]
             },{
                 name:'膜拜',
                 type:'bar',
                 data:[3000,6000,1000,4000,1000,2000,1000]
             },{
                 name:'小蓝',
                 type:'bar',
                 data:[6000,7000,2000,2000,3000,4000,2000]
             }]

         }
         return option2;
     }
     getOption= ()=>{
         let option={
             title:{
                 text:'用户骑行订单'
             },
             xAxis:{
                 data:['周一','周额','周三','周四','周五','周六','周日']
             },
             yAxis:{
                 type:'value'
             },
             tooltip:{
                 trigger:'axis'
             },
             series:[{
                 name:'OFO',
                 type:'bar',
                 data:[1000,2000,1000,4000,3000,6000,4000]
             }]

         }
         return option;
     }
     render(){
         return (
             <div>
             <Card title="柱形图表之一" >
                <ReactEcharts option={this.getOption()}  theme='imooc' style={{height:500}}/>
             </Card>
             <Card title="柱形图表之2" style={{marginTop:10}}>
                <ReactEcharts option={this.getOption2()}  theme='imooc' style={{height:500}}/>
             </Card>
             </div>
         )
     }
 }
