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
          this.map.centerAndZoom(endPoint,11);
          //添加起点的样式图片
          let startPointIcon=new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),
              {imageSize:new window.BMap.Size(36,42),anchor:new window.BMap.Size(18,42)
          })
          let bikeMarkerStart=new window.BMap.Marker(startPoint,{icon:startPointIcon});
          //将起点对象绑定到地图上
          this.map.addOverlay(bikeMarkerStart);
          //添加终点的样式图片
          let endPointIcon=new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),
              {imageSize:new window.BMap.Size(36,42),anchor:new window.BMap.Size(18,42)
          })
          let bikeMarkerend=new window.BMap.Marker(endPoint,{icon:endPointIcon});
          //将终点对象绑定到地图上
          this.map.addOverlay(bikeMarkerend);
          // 绘制luxian
          let routeList=[];
          list.forEach((item)=>{
              let p=item.split(',');
              routeList.push(new window.BMap.Point(p[0],p[1]))
          })
          let ployline=new window.BMap.Polyline(routeList,{
              strokeColor:"#ef4136",
              strokeWeight:3,
              strokeOpacity:1,
          })
          this.map.addOverlay(ployline);
          //绘制服务区
          let servicePointList=[];
          let serviceList=res.result.service_list;
          serviceList.forEach((item)=>{
              servicePointList.push(new window.BMap.Point(item.lon,item.lat));
          })
          let ployServiceline=new window.BMap.Polyline(servicePointList,{
              strokeColor:"#ef4139",
              strokeWeight:3,
              strokeOpacity:1,
          })
          this.map.addOverlay(ployServiceline);
            //添加地图中的自行车图片
            let bikeList=res.result.bike_list;
            let bikeIcon=new window.BMap.Icon('/assets/bike.jpg',new window.BMap.Size(36,42),{
                imageSize:new window.BMap.Size(36,42),
                anchor:new window.BMap.Size(18,42)
            })
            bikeList.forEach((item)=>{
                let p=item.split(",");
                let point=new window.BMap.Point(p[0],p[1]);
                let bikeMarker=new window.BMap.Marker(point,{icon:bikeIcon});
                this.map.addOverlay(bikeMarker);
            })
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
