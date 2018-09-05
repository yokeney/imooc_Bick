import React,{Component} from "react";
import {Card,Row,Col} from 'antd'
 export default class Gallery extends Component{
 constructor(){
     super();
     }
     render(){
         const imgs=[
             ['1.png','2.png','3.png','4.png','5.png'],
             ['6.png','7.png','8.png','9.png','10.png'],
             ['11.png','12.png','13.png','14.png','15.png'],
             ['16.png','17.png','18.png','19.png','20.png'],
             ['21.png','22.png','23.png','24.png','25.png'],
         ];
         const imgList=imgs.map((list)=>
            list.map((item)=>
                <Card cover={<img src={'/src/resource/gellery/'+item} />}>
                    <Card.Meta title="yoke" description="i love you "/>
                </Card>
            ))
         return (
             <div classNames="card-wrap">
                <Row>
                    <Col md={5}>
                        {
                            imgList[0]
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        {
                            imgList[1]
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        {
                            imgList[2]
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        {
                            imgList[3]
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        {
                            imgList[4]
                        }
                    </Col>
                </Row>
             </div>
         )
     }
 }
