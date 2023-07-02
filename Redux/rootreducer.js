import constant from './constants';

import { combineReducers } from 'redux';



//initializing state
const initialState = {
   list:[]
}
 
const mytodo = (state = initialState, action) => {
   switch (action.type) {
      case constant.MY_TODO: 
        let list = action.payload.list
      return {
         ...state ,list:list  
     
      }
  
      default: return state
   }
}


const rootReducer = combineReducers({
    mytodo
    // Add more reducers here if needed
  });
  
  export default rootReducer;
