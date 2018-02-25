import React,{Component} from 'react';
import PropTypes from 'prop-types';
const {object} = PropTypes;

const WithLocalHOC = (WrappedComponent) => {

  return class WithLocalHOC extends Component{
    static  contextTypes = {
      locale: object
    }

    componentDidMount(){
      this.context.locale.subscribe(() => this.forceUpdate());
    }

    render(){
      const {locale} = this.context;

      return <WrappedComponent {...this.props} locale={locale} />
    }
  }
};

export default WithLocalHOC;