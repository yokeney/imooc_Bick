import React,{Component} from "react";
 import {HashRouter as Router,Route,Link,Switch} from "react-router-dom"
 import App from './App'
 import Login from './page/login'
 import Admin from './admin' ;
 import Button from './page/ui/buttons'
 import NoMatch from './page/noMatch'
 export default class IRouter extends Component{
     render(){
         return (
                <Router>
                    <div>
                        <App>
                            <Route path='/login' component={Login}></Route>
                            <Route path='/admin' render=
                            {
                                ()=>
                                <Admin>
                                    <Route path='/admin/ui/buttons' component={Button}></Route>
                                    <Route  component={NoMatch}></Route>
                                </Admin>
                            }
                            ></Route>
                        </App>
                    </div>
                </Router>
         )
     }
 }
