import React,{Component} from "react";
import {Card,Row,Col,Modal} from 'antd'
 export default class Gallery extends Component{
     state={
         visable:false
     }
     openGallery=(imgsrc)=>{
         this.setState({
             visable:true,
             currentImg:imgsrc
         })
     }
     render(){
         const imgs=[
             ['http://47.98.171.13/img/1.png','http://47.98.171.13/img/2.png','http://47.98.171.13/img/3.png','http://47.98.171.13/img/4.png','http://47.98.171.13/img/5.png'],
             ['http://47.98.171.13/img/6.png','http://47.98.171.13/img/7.png','http://47.98.171.13/img/8.png','http://47.98.171.13/img/9.png','http://47.98.171.13/img/10.png'],
             ['http://47.98.171.13/img/11.png','http://47.98.171.13/img/12.png','http://47.98.171.13/img/13.png','http://47.98.171.13/img/14.png','http://47.98.171.13/img/15.png'],
             ['http://47.98.171.13/img/16.png','http://47.98.171.13/img/17.png','http://47.98.171.13/img/18.png','http://47.98.171.13/img/19.png','http://47.98.171.13/img/20.png'],
             ['http://47.98.171.13/img/21.png','http://47.98.171.13/img/22.png','http://47.98.171.13/img/23.png','http://47.98.171.13/img/24.png','http://47.98.171.13/img/25.png'],
         ];
         const imgList=imgs.map((list)=>
            list.map((item)=>
                <Card style={{marginBottom:20}} cover={<img src={item}  onClick={()=>this.openGallery(item)}/>}>
                    <Card.Meta title="yoke" description="i lovess you "/>
                </Card>
            ))
         return (
             <div className="card-wrap">
                <Row gutter={10}>
                    <Col md={5}>
                        {
                            imgList[0]
                        }
                    </Col>
                    <Col md={5}>
                        {
                            imgList[1]
                        }
                    </Col>
                    <Col md={5}>
                        {
                            imgList[2]
                        }
                    </Col>
                    <Col md={5}>
                        {
                            imgList[3]
                        }
                    </Col>
                    <Col md={4}>
                        {
                            imgList[4]
                        }
                    </Col>
                </Row>
                <Modal width={300} height={500} title={"图片画廊"} footer={null} visible={this.state.visable} onCancel={()=>{
                    this.setState({visable:false})
                }}>
                    <img src={this.state.currentImg} alt="" style={{width:'100%',height:'100%'}}/>
                </Modal>
             </div>
         )
     }
 }
