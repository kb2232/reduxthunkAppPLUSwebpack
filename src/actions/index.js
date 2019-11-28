// action creators
import JsonPlaceholder from '../apis/jsonplacholder';

/**
 * test reducers
 */
export const demoAction = ()=>{
  return {
    type:'DEMO_ACTION',
    payload:{
      amount:"This is a demo action"
    }
  }
}
export const demoTest = ()=>{
  return {
    type:'TEST_ACTION',
    payload:{
      amount:"This is a TEST 12345"
    }
  }
}
/**
 * actual reducers
 */
/*---This is to fetch post----*/
export const fetchPost =()=>{
  return async function(dispatch){
    const response = await JsonPlaceholder.get('/posts');
    dispatch({
      type:'FETCH_POST',
      payload:response.data
    })
  }
}