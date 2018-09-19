import React,{Component} from "react";
import {Card,Carousel} from 'antd';
import '../ui.less'
 export default class Corousel extends Component{
     render(){
         return (
             <div>
                <Card title="图片轮播图" className="item-slide">
                    <Carousel autoplay vertical="true">
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                    </Carousel>
                </Card>
                <Card title="图片轮播图" className="item-slide">
                    <Carousel autoplay effect="scrollx">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt=""/>
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt=""/>
                        </div>
                    </Carousel>
                </Card>
             </div>

         )
     }
 }
