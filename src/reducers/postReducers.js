// all reducers

export default (curstate=[],action)=>{
  switch(action.type){
    case 'DEMO_ACTION':
      return action.payload;
    case 'TEST_ACTION':
        return action.payload;
    case 'FETCH_POST':
        return action.payload;
    default:
      return curstate;
  }
} 