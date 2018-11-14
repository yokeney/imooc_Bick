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
import User from './page/user'
import Corousel from './page/ui/corousel'
import Logins from './page/form/login'
import FormRegister from './page/form/register'
import BasicTable from './page/table/basicTable'
import HightTable from './page/table/hightTable'
import Bikemap from './page/map/bikeMap'
import Bar from './page/echarts/bar'
import Pie from './page/echarts/pie'
import Line from './page/echarts/line'
import RichText from './page/rich'
import PermissionUser from './page/permission'
import Order from './page/order'
import Detail from './page/order/detail'
import City from './page/city'
import Common from './common'
export default class IRouter extends Component{
     render(){
         return (
                <Router>
                    <div>
                        <App>
                        <Switch>
                            <Route path="/common" render={() =>
                                <Common>
                                <Route path="/common/order/detail/:orderId" component={Detail}/>
                                </Common>
                            }
                            />
                            <Route path='/login' component={Login}></Route>
                            <Route path='/' render=
                            {
                                ()=>
                                <Admin>
                                    <Switch>
                                        <Route path='/ui/buttons' component={Buttons}></Route>
                                        <Route path='/ui/Modals' component={Modals}></Route>
                                        <Route path='/ui/loading' component={Loading}></Route>
                                        <Route path='/ui/notification' component={Notification}></Route>
                                        <Route path='/ui/messages' component={Msg}></Route>
                                        <Route path='/ui/tabs' component={Tab}></Route>
                                        <Route path='/ui/gallery' component={Gallery}></Route>
                                        <Route path='/ui/carousel' component={Corousel}></Route>
                                        <Route path='/form/login' component={Logins}></Route>
                                        <Route path='/form/reg' component={FormRegister}></Route>
                                        <Route path='/table/basic' component={BasicTable}></Route>
                                        <Route path='/table/high' component={HightTable}></Route>
                                        <Route path='/city' component={City}></Route>
                                        <Route path='/order' component={Order}></Route>
                                        <Route path='/user' component={User}></Route>
                                        <Route path='/bikeMap' component={Bikemap}></Route>
                                        <Route path='/charts/bar' component={Bar}></Route>
                                        <Route path='/charts/pie' component={Pie}></Route>
                                        <Route path='/charts/line' component={Line}></Route>
                                        <Route path='/rich' component={RichText}></Route>
                                        <Route path='/permission' component={PermissionUser}></Route>
                                        <Route  component={NoMatch}></Route>
                                    </Switch>
                                </Admin>
                            }
                            >
                            </Route>
                        </Switch>
                    </App>
                    </div>
                </Router>
         )
     }
 }
