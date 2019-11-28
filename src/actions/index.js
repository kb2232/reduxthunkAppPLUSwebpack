// action creators
import JsonPlaceholder from '../apis/jsonplacholder';

export const demoAction = ()=>{
  return {
    type:'DEMO_ACTION',
    payload:{
      amount:"This is a demo action"
    }
  }
}

/*---This is to fetch post----*/
export const fetchPost =()=>{
  return async function(dispatch){
    const response = await JsonPlaceholder.get('/posts');
    dispatch({
      type:'FETCH_POST',
      payload:response
    })
  }
}