import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Progress} from  'antd'
import   'antd/dist/antd.css'
import './index.less'

class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary" shape="circle" icon="search" />
      </div>
    );
  }
}

export default App;
