class ReducerRegistry {
  constructor(){
    this._emitChange = null;
    this._reducers = {};
  }


  getReducers(){
    return {...this._reducers};
  }

  register(name,reducer){
    if(this._reducers[name]){
      console.warn(`Reducer ${name} is replaced in ReducerRegistry. You may have duplicate reducer name`)
    }
    this._reducers = {...this._reducers,[name]: reducer};
    if(this._emitChange){
      this._emitChange(this.getReducers());
    }
  }

  setChangeListener(listener){
    this._emitChange = listener;
  }

}

const reducerRegistry = new ReducerRegistry();

const createReducerName = (businessUnit, packageName, componentName) => (
    `${businessUnit}${packageName}${componentName}`
);

export {reducerRegistry,createReducerName};