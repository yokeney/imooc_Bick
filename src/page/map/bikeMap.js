import React,{Component} from "react";
import {Card,Button,Modal,Form,Radio,DatePicker,Input,Select} from "antd"
import Baseform from "../../compoments/baseForm"
import util from "../../util/util"
import axios from "./../../axios/index"
 export default class Bikemap  extends Component{
     state={}
     //查询表单
     handleFilterSubmit=(FieldParmas)=>{
         this.params=FieldParmas;
         this.request();
     }
     componentDidMount(){
         this.request();
     }
     request=()=>{
         axios.ajax({
             url:"/citymap",
             data:{
                 params:this.params
             }
         }).then((res)=>{
             if (res.code==0) {
                 this.setState({
                     totle_count:res.result.total_count
                 })
                 this.renderMap(res);
             }
         })
      }
      //渲染地图
      renderMap=(res)=>{
          let list=res.result.route_list;
          this.map=new window.BMap.Map('container');
          let gps1=list[0].split(",");
          //起点
          let startPoint=new window.BMap.Point(gps1[0],gps1[1])
          let gps2=list[list.length-1].split(",");
          // 终点
          let endPoint=new window.BMap.Point(gps2[0],gps2[1]);
          this.map.centerAndZoom(endPoint,11)
       }
     formList=[
         {
             type:'城市',
             width:100
         },
         {
             type:"时间查询"
         },
        {
            type:'SELECT',
            label:'订单状态',
            filed:'order_status',
            placeholder:'全部',
            initialValue:'全部',
            width:100,
            list:[
                {
                    id:0,
                    name:'全部'
                },
                {
                    id:1,
                    name:'进行中'
                },
                {
                    id:2,
                    name:'行程结束'
                }
            ]
        }

     ]
     render(){
         return (
             <div>
                 <Card>
                    <Baseform formList={this.formList} filterSubmit={this.handleFilterSubmit}/>
                 </Card>
                 <Card style={{marginTop:20}}>
                    <div>
                        共{this.state.totle_count}俩
                    </div>
                    <div id="container" style={{height:500}}>

                    </div>
                 </Card>
             </div>
         )
     }
 }
