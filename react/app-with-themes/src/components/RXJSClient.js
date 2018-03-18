import React,{Component} from 'react';
import {communicator} from './RXJSServerComponent';

export default class RXJSClient extends Component{

  constructor(props){
     super(props);
     this.state = {rxvalue: ""};
  }
  componentDidMount(){
   communicator.subscribe({
      next: (value) => this.setState({rxvalue: value})
    });
  }

  render(){
    return (<div>This is RXValue: {this.state.rxvalue}</div>);
  }

}
