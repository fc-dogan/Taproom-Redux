import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './/keg-list-reducer';
import selectKegReducer from './select-keg-reducer';
import editingKegReducer from'./editing-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  allKombuchaList: kegListReducer,
  selectedKeg: selectKegReducer,
  editingKeg: editingKegReducer
});

export default rootReducer;