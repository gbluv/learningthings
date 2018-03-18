import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose} from 'redux';

import thunk from 'redux-thunk';
import {reducerRegistry} from "./ReducerRegistry";


const initialState = {};



const combine = (reducers) => {
  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach(item => {
     if(reducerNames.indexOf(item) === -1){
       reducerNames[item] = (state = null) => state;
     }
  });
  return combineReducers(reducers);
}


const reducer = combine(reducerRegistry.getReducers());
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

reducerRegistry.setChangeListener(reducers => {
   store.replaceReducer(combine(reducers));
});

export { store };