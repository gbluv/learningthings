import {reducerRegistry,createReducerName} from '../../store/ReducerRegistry';
const reducerName = createReducerName('mtla','FX','Derivatives');
const createActionName = name => `FX/${reducerName}/${name}`;

export const FETCH = createActionName('FETCH');
export const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');

export const fetch = () => ({type: FETCH});
export const fetchsuccess = (data) => ({type: FETCH_SUCCESS,data});

const init  = {
  data: [],
  loading: false,
  error: null
};


export default function FXReducer(state = init, action){
  switch(action.type){
    case FETCH: {
      return {...state,loading: true,error: null}
    }
    case FETCH_SUCCESS: {
      return {data: action.data,loading: false,error: null}
    }
    default:
      return state;
  }
}

//REGISTERING REDUCER
reducerRegistry.register(reducerName,FXReducer);

//selectors to use in map state to props to select specific slice of state
export const selectRow = state => state[reducerName];
