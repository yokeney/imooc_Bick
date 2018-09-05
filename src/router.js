import React,{Component} from "react";
import {HashRouter as Router,Route,Link,Switch} from "react-router-dom"
import App from './App'
import Login from './page/login'
import Admin from './admin' ;
import Buttons from './page/ui/buttons'
import Modals from './page/ui/Modal'
import NoMatch from './page/noMatch'
import Loading from './page/ui/Loading'
import Notification from './page/ui/notification'
import Msg from './page/ui/Message'
import Tab from './page/ui/tab'
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
                                        <Route path='/admin/ui/notification' component={Notification}></Route>
                                        <Route path='/admin/ui/messages' component={Msg}></Route>
                                        <Route path='/admin/ui/tabs' component={Tab}></Route>
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
