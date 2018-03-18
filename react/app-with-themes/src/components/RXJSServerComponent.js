import React from 'react';
import {Subject} from 'rxjs';

export const communicator =  new Subject();


const talker = () => {
  communicator.next(+new Date);
}


export const RXJSServerComponent = (props) => (
    <div>
      <button onClick={talker}>Say yo</button>
    </div>
);





