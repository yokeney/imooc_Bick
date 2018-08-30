import React,{Component} from "react";
 import {HashRouter as Router,Route,Link,Switch} from "react-router-dom"
 import App from './App'
 import Login from './page/login'
 import Admin from './admin' ;
 import Buttons from './page/ui/buttons'
 import Modals from './page/ui/Modal'
 import NoMatch from './page/noMatch'
 import Loading from './page/ui/Loading'
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
                                    <Switch>
                                        <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                        <Route path='/admin/ui/Modals' component={Modals}></Route>
                                        <Route path='/admin/ui/loadings' component={Loading}></Route>
                                        <Route  component={NoMatch}></Route>
                                    </Switch>
                                </Admin>
                            }
                            ></Route>
                        </App>
                    </div>
                </Router>
         )
     }
 }
