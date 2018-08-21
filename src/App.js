import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Progress,Icon} from  'antd'
// import   'antd/dist/antd.css'
import './index.less'
class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
export default App;
