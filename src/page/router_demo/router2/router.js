import React,{Component} from "react";
 import {HashRouter as Router,Route,Switch} from "react-router-dom"
 import Main from './../router1/Main'
 import Pro from './../router1/pro'
 import Topic from './../router1/topic'
 import Home from './Home'
 export default class Irouter extends Component{
     render(){
         return ( 
             <Router>
                 <Home>
                     <Route path="/" exact component={Main} ></Route>
                     <Route path="/about" component={Pro} ></Route>
                     <Route path="/topic" component={Topic} ></Route>
                 </Home>
             </Router>
         )
     }
 }
