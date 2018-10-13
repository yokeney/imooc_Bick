import React,{Component} from "react";
import {Card,Button,Table,Form,Select,Modal,message,DatePicker} from 'antd';
import axios from './../../axios/index';
import util from '../../util/util';
import './detail.less'
 const FormItem=Form.Item;
 const Option=Select.Option;
 export default class Detail extends Component{
     state={}
     componentDidMount(){
         let orderId=this.props.match.params.orderId;
         console.log(orderId);
         if (orderId) {
             this.getDetailInfo(orderId);
         }
     }
     getDetailInfo=(orderId)=>{
        axios.ajax({
            url:'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api/order/detail',
            data:{
                params:{
                    orderId:orderId
                }
            }
        }).then((res)=>{
            console.log(res);
            if (res.code==="0") {
                this.setState({
                    orderInfo:res.result
                })
            }
        })
     }
     render(){
         const info=this.state.orderInfo|| {};
         console.log(info);
         return (
             <div>
                <Card>
                    <div id="orderDetailMap"></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">
                                    用车模式
                                </div>
                                <div className="detail-form-content">{info.mode===1?"服务区":"停车点"}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">
                                    订单编号
                                </div>
                                <div className="detail-form-content">{info.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">
                                    车辆编号
                                </div>
                                <div className="detail-form-content">{info.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">
                                    用户姓名
                                </div>
                                <div className="detail-form-content">{info.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">
                                    手机号码
                                </div>
                                <div className="detail-form-content">{info.mobile}</div>
                            </li>
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">行程轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">
                                    行程起点
                                </div>
                                <div className="detail-form-content">{info.start_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">
                                    行程终点
                                </div>
                                <div className="detail-form-content">{info.end_location}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">
                                    行程里程
                                </div>
                                <div className="detail-form-content">{info.distance/1000}公里</div>
                            </li>
                        </ul>
                    </div>
                </Card>
             </div>
         )
     }
 }
