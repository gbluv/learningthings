import {fetch,fetchsuccess} from './PCReducer';

const someData = [1,2,3];

export const getData = () => (dispatch,getState)=> {
  dispatch(fetch());
  dispatch(fetchsuccess(someData));
};