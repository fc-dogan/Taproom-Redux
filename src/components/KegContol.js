import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from "prop-types";

function KegControl (props) {
  const { dispatch } = props;

 const handleClick = () =>{
    const action = a.toggleForm();
    dispatch(action);
  }
  const handleClickToListfromDetail = () =>{
    const action2 = a.unselectKeg();
    dispatch(action2);
  }
  const handleClickToListfromEdit = () =>{
    const action2 = a.unselectKeg();
    dispatch(action2);
    const action3 = a.editingKeg();
    dispatch(action3);
  }

 const handleAddingNewKegToList = (newKeg) => {
    const action =a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  const handleChangingSelectedKeg = (id) => {
    const newSelectedKeg = props.allKombuchaList[id]
    const action =a.selectKeg(newSelectedKeg);
    dispatch(action);
  }

  const handleDecreamentKegQuantity = (id) =>{
    const action = a.sellKeg(id);
      dispatch(action);
  }

  const handleEditClick = () => {
    const action =a.editingKeg();
    dispatch(action);
  }

  const handleEditingKegInList = (kegToEdit) =>{
    const action =a.addKeg(kegToEdit);
    dispatch(action);
    const action2 =a.editingKeg();
    dispatch(action2);
    const action3 = a.unselectKeg();
    dispatch(action3);
  }

  const handleDeletingKegInList = (id) => {
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.unselectKeg();
    dispatch(action2);
  }

  let currentlyVisibleState= null;
  if(props.editingKeg){
    currentlyVisibleState = 
    <div>
      <EditKegForm selectedKeg={props.selectedKeg} onEditKeg={handleEditingKegInList} />
      <button onClick ={handleClickToListfromEdit}>Return to List</button>
    </div>
  } 
  else if(props.selectedKeg != null ) {
    currentlyVisibleState = 
    <div>
      <KegDetail selectedKeg={props.selectedKeg} onClickingEdit={handleEditClick} onDeletingKeg={handleDeletingKegInList} />
      <button onClick ={handleClickToListfromDetail}>Return to List</button>
      </div>
  } 
  else if(props.formVisibleOnPage){
    currentlyVisibleState = 
    <div>
      <NewKegForm onNewKegCreation={handleAddingNewKegToList}/>
      <button onClick={handleClick}>Return to List</button>
    </div>
  } 
  else {
    currentlyVisibleState =
    <div>
      <KegList kegList={props.allKombuchaList} onKegSelection={handleChangingSelectedKeg} onchangeKegQuantity={handleDecreamentKegQuantity}/>
      <button onClick={handleClick}>Add</button>
    </div>
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  )
}

KegControl.propTypes = {
  allKombuchaList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editingKeg: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    allKombuchaList: state.allKombuchaList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editingKeg: state.editingKeg
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl; 