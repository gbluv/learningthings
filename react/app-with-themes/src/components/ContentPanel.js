import React,{Component} from 'react';
import WithLocaleHOC from './WithLocaleHOC';


@WithLocaleHOC
export default class ContentPanel extends Component{


  render(){
    const {locale} = this.props;

    return(
        <div className="contentPanel roundedCorners">
          <h1>{locale.strings.header}</h1>
          <p>
            {locale.strings.text}
          </p>
          <button className="roundedCorners">{locale.strings.buttonLabel}</button>
          <footer>ContentPanel</footer>
        </div>
    )
  }
}

