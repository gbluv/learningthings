import React,{Component} from 'react';
import {selectRow} from '../containers/portable-component/PCReducer';
import * as PCAction from '../containers/portable-component/PCAction';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    portableComponentReducer:  selectRow(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  const getDataAction = bindActionCreators({...PCAction},dispatch);
  return {
    getDataAction
  }
};

class SomeComponent extends Component{
  constructor(props){
    super(props);
    this.state = {...props};
  }

  componentDidMount(){
    this.props.getDataAction.getData();

  }
  componentWillReceiveProps(nextProps){
    console.log("settings state ",nextProps);
    this.setState(...nextProps);
  }

  render(){

    if ( !this.props.portableComponentReducer || !this.props.portableComponentReducer.data ) {
      return "<h1>...Loading</h1>";
    }
    return (
        <div>
          <h1>This is the data</h1>
          {
            this.props.portableComponentReducer.data.map(el => <strong>{el}</strong>)
          }
        </div>
    )
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(SomeComponent);