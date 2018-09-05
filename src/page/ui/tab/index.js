import React,{Component} from "react";
import {Card,Button,Tabs,message,Icon,TabPane} from 'antd'
import '../ui.less'
 export default class Tab extends Component{
      newTabIndex=0;
     constructor(){
         super();
     }
     handlecallback=(key)=>{
         message.success("您选择的页签："+key)
     }
     componentWillMount(){
         const panes=[
             {
                 title:'tab1',
                 content:'tab1cont',
                 key:'1'
             },
             {
                 title:'tab2',
                 content:'tab2cont',
                 key:'2'
             },
             {
                 title:'tab3',
                 content:'tab3cont',
                 key:'3'
             }
         ]

         this.setState({
             panes,
             activeKey:panes[0].key,
         })
     }

         onEdit = (targetKey, action) => {
              this[action](targetKey);
            }
         add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }
  onChange = (activeKey) => {
      this.setState({ activeKey });
     }
  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
}

     render(){
         const TabPane=Tabs.TabPane;
         return (
             <div>
                <Card title="Tab" className="card-wrap">
                    <Tabs defaultActivityKey="1" onChange={this.handlecallback}>
                        <TabPane tab='Tab1' key="1">Count of Tab Pane 1</TabPane>
                        <TabPane tab='Tab2' key="2">Count of Tab Pane 2</TabPane>
                        <TabPane tab='Tab3' key="3">Count of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab" className="card-wrap">
                    <Tabs
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                      >
                        {
                            this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)
                        }
                    </Tabs>
                </Card>
             </div>
         )
        }
 }
