import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Panel from './components/Panel';

import Locale from './localles/Locale';

import {RXJSServerComponent} from './components/RXJSServerComponent';
import RXJSClient from './components/RXJSClient';


// https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076
const {
  object
}  = PropTypes;

class App extends Component {
  constructor(props,context){
    super(props);
    this.locale = new Locale('en');
  }
  state = {
    currentLocale: 'en'
  }

  componentWillUpdate(nextProps,nextState){
    this.locale.setLanguage(nextState.currentLocale);
  }

  static childContextTypes = {
    locale: object
  };

  getChildContext() {
    return {locale: this.locale}
  }

  changeLocale(locale){
    this.locale.setLanguage(locale);
  }


  render() {
    return (
      <div className="App">
        <button onClick={() => this.changeLocale('en')}>EN</button>
        <button onClick={() => this.changeLocale('ru')}>RU</button>
        <Panel/>
        <h1>RXJS Communications</h1>
        <RXJSServerComponent/>
        <RXJSClient />
      </div>
    );
  }
}



export default App;
