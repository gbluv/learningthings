import React,{Component} from 'react';
import InternalPanel from '../components/InternalPanel';

import './Panel.css';

class Panel extends Component{


  render(){
    const {locale} = this.props;
    return (
        <div className="Panel roundedCorners">
          <InternalPanel/>
          <footer>
            Panel.js {locale}
          </footer>
        </div>
    )
  }

}

export default Panel;