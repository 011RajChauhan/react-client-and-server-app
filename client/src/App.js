import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:''
    }
  }
  componentWillMount() {
    let data = axios.get('/rest/');
    data.then(res=>{
      this.setState({message:res.data.first});
    });
  }
  render() {
    return (
      <div>
        {this.state.message == '' ? <h2>loading message from server...</h2> : <h2>{this.state.message}</h2>}
      </div>
    );
  }
}

export default App;
