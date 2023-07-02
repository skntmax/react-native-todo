import { INCREMENT_COUNTER, DECREMENT_COUNTER } from
'./constants';
 
export const todoList = (parameter) => {
   return {
      type: INCREMENT_COUNTER ,
      payload: parameter
   }
}
