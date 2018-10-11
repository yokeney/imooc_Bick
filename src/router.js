import React,{Component} from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom"
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
import Gallery from './page/ui/gallery'
import Corousel from './page/ui/corousel'
import Logins from './page/form/login'
import FormRegister from './page/form/register'
import BasicTable from './page/table/basicTable'
import HightTable from './page/table/hightTable'
import Order from './page/order'
import City from './page/city'
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
                                        <Route path='/admin/ui/loading' component={Loading}></Route>
                                        <Route path='/admin/ui/notification' component={Notification}></Route>
                                        <Route path='/admin/ui/messages' component={Msg}></Route>
                                        <Route path='/admin/ui/tabs' component={Tab}></Route>
                                        <Route path='/admin/ui/gallery' component={Gallery}></Route>
                                        <Route path='/admin/ui/carousel' component={Corousel}></Route>
                                        <Route path='/admin/form/login' component={Logins}></Route>
                                        <Route path='/admin/form/reg' component={FormRegister}></Route>
                                        <Route path='/admin/table/basic' component={BasicTable}></Route>
                                        <Route path='/admin/table/high' component={HightTable}></Route>
                                        <Route path='/admin/city' component={City}></Route>
                                        <Route path='/admin/order' component={Order}></Route>
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
