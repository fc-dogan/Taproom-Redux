import * as a from '../actions/ActionTypes';

export default (state=null ,action) => {
  const { id } = action;
  switch(action.type){
    case a.SELECT_KEG :
      const newState = state[id];
      return newState;
    case a.UNSELECT_KEG:
      return null;
    case a.SELL_KEG:
      const nState = state[id];
      const updatedKeg = {...nState, quantity: nState.quantity - 1}
      return updatedKeg;
    default:
      return state;
  }
}