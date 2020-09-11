import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      allKombuchaList: [
        {
          name: "Synergy",
          brand: "GT's",
          price: 3,
          flavor: "Cosmic Cranberry",
        }
      ],
      selectedKeg: null,
      editingKeg: false
    }
  }

  handleClick = () =>{
    if(this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editingKeg: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
    }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.allKombuchaList.concat(newKeg);
    this.setState({
      allKombuchaList: newKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const newSelectedKeg = this.state.allKombuchaList.filter(keg => keg.id === id)[0];
    this.setState({
      selectedKeg: newSelectedKeg
    })
  }

  handleDecreamentKegQuantity = (id) =>{
    const newselectedKeg = this.state.allKombuchaList.filter(keg => keg.id === id )[0];
    const decrasedQuantity =() => {
    if(newselectedKeg.quantity > 1){
      return newselectedKeg.quantity -=1;
    }  else {
       return "Out of Stock"
    }};
    const updatedKeg = {...newselectedKeg, quantity: decrasedQuantity()}
    const newKegList = this.state.allKombuchaList.filter( keg =>
      keg.id !== id).concat(updatedKeg)
    this.setState({
      allKombuchaList: newKegList
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({
      editingKeg: true
    })
  }

  handleEditingKegInList = (kegToEdit) =>{
    const editedKombuchaList = this.state.allKombuchaList.filter(keg => keg.id !== this.state.selectedKeg.id).concat(kegToEdit);
    this.setState({
      allKombuchaList: editedKombuchaList,
      editingKeg: false,
      selectedKeg: null
    })

  }

  handleDeletingKegInList = (id) => {
    const newKombuchaList = this.state.allKombuchaList.filter(keg => keg.id !== id);
    this.setState({
      allKombuchaList: newKombuchaList,
      selectedKeg: null
    })
  }

  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    if(this.state.editingKeg){
      currentlyVisibleState = <EditKegForm selectedKeg={this.state.selectedKeg} onEditKeg={this.handleEditingKegInList}/>
      buttonText = "Return to Keg list";
    } else if(this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail selectedKeg={this.state.selectedKeg} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Keg list";
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg list";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.allKombuchaList} onKegSelection={this.handleChangingSelectedKeg} onchangeKegQuantity={this.handleDecreamentKegQuantity}/>
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        <p>Keg control</p>
        {currentlyVisibleState}
        <button onClick={this.handleClick} >{buttonText}</button>
      </React.Fragment>
      
    )
  }
}

export default KegControl; 