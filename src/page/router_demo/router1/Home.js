import React,{Component} from "react";
import Main from './Main'
// import Main from './Main'
import Pro from './pro'
import Topic from './topic'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
 export default class Home extends Component{
   render(){
     return (
         <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topic">Topics</Link>
                    </li>
                </ul>
            <hr />
            {/*Switch 只匹配一个*/}
            <Switch>
                <Route path="/" exact component={Main} ></Route>
                <Route path="/about" component={Pro} ></Route>
                <Route path="/topic" component={Topic} ></Route>
            </Switch>
           </div>
         </HashRouter>
     )
   }
 }
