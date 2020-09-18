import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import * as a from './../actions';
import PropTypes from "prop-types";

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      // allKombuchaList: [
      //   {
      //     name: "Synergy",
      //     brand: "GT's",
      //     price: 3,
      //     flavor: "Cosmic Cranberry",
      //     quantity: 120
      //   }
      // ],
      // selectedKeg: null,
      // editingKeg: false
    }
  }

  handleClick = () =>{
    const { dispatch } = this.props;
    if(this.state.selectedKeg != null){
      const action2 = a.unselectKeg();
      dispatch(action2);
      const action3 = a.editingKeg();
      dispatch(action3);
      // this.setState({
      //   formVisibleOnPage: false,
      //   selectedKeg: null,
      //   editingKeg: false
      // })
    } else {
      const action = a.toggleForm();
      dispatch(action);
      // this.setState(prevState => ({
      //   formVisibleOnPage: !prevState.formVisibleOnPage
      // }));
    }
    }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
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

  handleChangingSelectedKeg = (id) => {
    const { dispatch } = this.props;
    // const newSelectedKeg = this.state.allKombuchaList.filter(keg => keg.id === id)[0];
    const action =a.selectKeg(id);
    dispatch(action);
    // this.setState({
    //   selectedKeg: newSelectedKeg
    // })
  }

  handleDecreamentKegQuantity = (id) =>{
    const { dispatch } = this.props;
    const newselectedKeg = this.state.allKombuchaList.filter(keg => keg.id === id )[0];
    let updatedKeg = null;
    if(newselectedKeg.quantity > 1){
      const action = a.sellKeg(id);
      dispatch(action);
      // updatedKeg = {...newselectedKeg, quantity: newselectedKeg.quantity - 1}
       
    }  else {
      updatedKeg = {...newselectedKeg, quantity:null, quantityMessage: "Out of Stock"}
    };
    
    const newKegList = this.state.allKombuchaList.filter( keg =>
      keg.id !== id).concat(updatedKeg);
    const action2 =a.addKeg(newKegList);
    dispatch(action2);
    // this.setState({
    //   allKombuchaList: newKegList
    // })
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action =a.editingKeg();
    dispatch(action);
    // this.setState({
    //   editingKeg: true
    // })
  }

  handleEditingKegInList = (kegToEdit) =>{
    const editedKombuchaList = this.state.allKombuchaList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    const { dispatch } = this.props;
    const action =a.addKeg(editedKombuchaList);
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

  handleDeletingKegInList = (id) => {
    const { dispatch } = this.props;
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

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    if(this.props.editingKeg){
      currentlyVisibleState = <EditKegForm selectedKeg={this.props.selectedKeg} onEditKeg={this.handleEditingKegInList}/>
      buttonText = "Return to Keg list";
    } else if(this.props.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail selectedKeg={this.props.selectedKeg} onClickingEdit={this.handleEditClick} onDeletingKeg={this.handleDeletingKegInList} />
      buttonText = "Return to Keg list";
    } else if(this.props.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg list";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.allKombuchaList} onKegSelection={this.handleChangingSelectedKeg} onchangeKegQuantity={this.handleDecreamentKegQuantity}/>
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} >{buttonText}</button>
      </React.Fragment>
      
    )
  }
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