import React,{Component} from "react";
import {Card,Button,Modal} from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html'
//按需加载
 export default class RichText extends Component{
     state={
         showRichText:false,
         editorState:''
     }
     onEditorStateChange=(editorState)=>{
         this.setState({
             editorState
         })
      }
      handleClearContent=()=>{
          this.setState({
              editorState:'',
          })
       }
      onEditChange=(contentstate)=>{
          this.setState({
              contentstate
          },()=>{
              console.log(this.state.contentstate);
          })
       }
      handleGetContent=()=>{
          this.setState({
              showRichText:true
          })
        }
     render(){
         const {editorState}=this.state;
         return(
             <div>
             <Card>
             <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
             <Button type="primary" onClick={this.handleGetContent}>获取html文本</Button>
             </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onContentStateChange={this.onEditChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="文本内容"
                    visible={this.state.showRichText}
                    onCancel={
                        ()=>{
                            this.setState({
                                showRichText:false
                            })
                        }
                    }
                    footer={""}
                >
                {draftjs(this.state.contentstate)}
                </Modal>
             </div>
         )
     }
 }
