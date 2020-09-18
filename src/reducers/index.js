import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './/keg-list-reducer';
import selectKegReducer from './select-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  allKombuchaList: kegListReducer,
  selectedKeg: selectKegReducer
});

export default rootReducer;