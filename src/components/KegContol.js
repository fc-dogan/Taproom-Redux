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
    if(props.selectedKeg !== null){
      const action2 = a.unselectKeg();
      dispatch(action2);
      const action = a.toggleForm();
      dispatch(action);
      const action3 = a.editingKeg();
      dispatch(action3);
      // this.setState({
      //   formVisibleOnPage: false,
      //   selectedKeg: null,
      //   editingKeg: false
      // })
    } else {
      const action4 = a.toggleForm();
      dispatch(action4);
      
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
    }
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
    // const newKegList = this.state.allKombuchaList.concat(newKeg);
    // this.setState({
    //   allKombuchaList: newKegList,
    //   formVisibleOnPage: false
    // });
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
    // const editedKombuchaList = this.state.allKombuchaList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);

    const action =a.addKeg(kegToEdit);
    dispatch(action);
    const action2 =a.editingKeg();
    dispatch(action2);
    const action3 = a.unselectKeg();
    dispatch(action3);
    // this.setState({
    //   allKombuchaList: editedKombuchaList,
    //   editingKeg: false,
    //   selectedKeg: null
    // })
  }

  const handleDeletingKegInList = (id) => {

    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.unselectKeg();
    dispatch(action2);
    // const newKombuchaList = this.state.allKombuchaList.filter(keg => keg.id !== id);

    // this.setState({
    //   allKombuchaList: newKombuchaList,
    //   selectedKeg: null
    // })
  }

 
    let currentlyVisibleState= null;
    let buttonText = null;
    if(props.editingKeg){
      currentlyVisibleState = <EditKegForm selectedKeg={props.selectedKeg} onEditKeg={handleEditingKegInList}
      onClickToList={handleClickToListfromEdit}/>
      // buttonText = "Return to Keg list";
    } else if(props.selectedKeg != null ) {
      currentlyVisibleState = <KegDetail selectedKeg={props.selectedKeg} onClickingEdit={handleEditClick} onDeletingKeg={handleDeletingKegInList} 
      onClickToList={handleClickToListfromDetail} />
      // buttonText = "Return to Keg list";
    } else if(props.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={handleAddingNewKegToList}/>
      buttonText = "Return to Keg list";
    } else {
      currentlyVisibleState = <KegList kegList={props.allKombuchaList} onKegSelection={handleChangingSelectedKeg} onchangeKegQuantity={handleDecreamentKegQuantity}/>
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={handleClick} >{buttonText}</button>
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