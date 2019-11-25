import { combineReducers } from 'redux';

const demoReducer = (curstate=[],action)=>{
  if(action.type==='DEMO_ACTION')
    return action.payload;
  else
    return curstate;
}

export default combineReducers({
  kdemo:demoReducer
});