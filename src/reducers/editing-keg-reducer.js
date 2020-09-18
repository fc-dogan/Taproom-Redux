import * as a from '../actions/ActionTypes';

export default (state = false, action) => {
  switch (action.type){
    case a.EDITING_KEG :
      return !state;
    default:
      return state;
  }
}