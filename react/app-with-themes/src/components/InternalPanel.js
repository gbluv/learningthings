import React,{Component} from 'react';
import ContentPanel from './ContentPanel';
import './Panel.css';

export default class InternalPanel extends Component{
  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
      <div className="internalPanel roundedCorners">

        <ContentPanel/>
        <footer>InternalPanel.js</footer>
      </div>
    );
  }
}