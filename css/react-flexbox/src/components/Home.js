import React, {Component} from 'react';
import alignContentCenter from '../images/align-content-center.png';
import alignItemsCenterFlexFlowColumn from '../images/align-items-center-flex-flow-column.png';
import alignItemsCenterFlexFlowRow from '../images/align-items-center-flex-flow-row.png';

import './Home.css';
import MainContent from './mainContent';


const icon = {
  width: '10%',
  height: '10%'
};

const nav = {
  marginBottom: "10px"
};

export default class Home extends Component {
  state = {
    theme: {
      parent: {}
    }
  }
  alignContent = () => {
    this.setState({
      theme: {
        parent: {
          'align-items': "center",
          'display': 'flex',
          'flex-flow':'row wrap',
          'align-content':'center'
        }
      }
    })
  };
  alignItemsCenterFlexFlowColumn = () => {
    this.setState({
      theme: {
        parent: {
          'align-items': "center",
          'flex-flow': 'column'
        }
      }
    })
  }

  alignItemsCenterFlexFlowRow = () => {
    this.setState({
      theme: {
        parent: {
          'align-items': "center",
          'flex-flow': 'row'
        }
      }
    })
  }
  render(){

    console.log(Object.keys(this.state.theme.parent))
    return (
        <div>
          <ul>
            {Object.keys(this.state.theme.parent).map(key => (
                <li>{key}:{this.state.theme.parent[key]}</li>
            ))}
          </ul>
          <nav style={nav}>
            <img
                src={alignContentCenter}
                style={icon}
                alt={alignContentCenter}
                onClick={() => this.alignContent()}
            />

            <img
                src={alignItemsCenterFlexFlowColumn}
                style={icon}
                alt={alignItemsCenterFlexFlowColumn}
                onClick={() => this.alignItemsCenterFlexFlowColumn()}
            />

            <img
                src={alignItemsCenterFlexFlowRow}
                style={icon}
                alt={alignItemsCenterFlexFlowColumn}
                onClick={() => this.alignItemsCenterFlexFlowRow()}
            />
          </nav>

          <div style={{ width: '100%' }}>
            <MainContent {...this.state}/>
          </div>
        </div>
    )
  }
};
