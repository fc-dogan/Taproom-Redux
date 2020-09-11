import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';

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
      ]
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


  render(){
    let currentlyVisibleState= null;
    let buttonText = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to Keg list";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.allKombuchaList} />
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