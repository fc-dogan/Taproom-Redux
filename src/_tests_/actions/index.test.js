import * as actions from "./../../actions";
import * as a from './../../actions/ActionTypes';

describe('taproom actions', () =>{
  const kegData = {
    name: "Synergy",
    brand: "GT's",
    price: 3,
    flavor: "Cosmic Cranberry",
    quantity: 120,
    id: 1
  };
  it('addKeg action should create ADD_KEG action', () =>{
    expect(actions.addKeg(kegData)).toEqual({
      type: a.ADD_KEG,
      name: "Synergy",
      brand: "GT's",
      price: 3,
      flavor: "Cosmic Cranberry",
      quantity: 120,
      id: 1
    })
  });
  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: a.DELETE_KEG,
      id: 1
    })
  })
})