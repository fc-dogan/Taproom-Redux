import * as a from '../actions/ActionTypes';

export default (state=null ,action) => {
  const { id } = action;
  switch(action.type){
    case a.SELECT_KEG :
      const newState = state[id];
      return newState;
    default:
      return state;
  }
  
}