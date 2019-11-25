import { combineReducers } from 'redux';

// reducers

//general reducer
const topSports = ()=>{
  return[
    {
      title:'NBA',
      origin:'U.S.'
    },
    {
      title:'BASEBALL',
      origin:'U.S.'
    }
  ]
}
// selected sport
const selectedSport=(sportSelected=[], action)=>{
  if(action.type==='SELECT_SPORT')
      return action.payload;
  else return sportSelected;
}

export default combineReducers({
  sports: topSports,
  selectedSport: selectedSport
})