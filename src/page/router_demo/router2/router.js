import React,{Component} from " react";
 import {HashRouter as Router,Route,Switch} from "react-router-dom"
  import Pro from './../router1/pro'
 import Topic from './../router1/topic'
 import Home from './Home'
 export default class Irouter extends Component{
     render(){
         return (
             <Router>
                 <Home>
                 {/*嵌套路由，render一个组件，不能使用exact*/}
                     <Route path="/main"  render=
                     {
                         ()=> <Main><Route path='/main/a' component={Pro}></Route></Main>
                     } ></Route>
                     <Route path="/about" component={Pro} ></Route>
                     <Route path="/topic" component={Topic} ></Route>
                 </Home>
             </Router>
         )
     }
 }
