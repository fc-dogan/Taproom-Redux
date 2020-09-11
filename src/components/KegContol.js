import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';
import KegDetail from './KegDetail';

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
          quantity: 20,
        }
      ],
      selectedKeg: null,
    }
  }

  handleClick = () =>{
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewKegToList = (newKeg) => {
    const newKegList = this.state.allKombuchaList.concat(newKeg);
    this.setState({
      allKombuchaList: newKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const newSelectedKeg = this.state.allKombuchaList.filter(keg => keg.id === id);
    this.setState({
      selectedKeg: newSelectedKeg
    })
  }


  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    if(this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail selectedKeg={this.state.selectedKeg} />
      buttonText = "Return to Keg list";
    } else if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg list";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.allKombuchaList} onKegSelection={this.handleChangingSelectedKeg} />
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