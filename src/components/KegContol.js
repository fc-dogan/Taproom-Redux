import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
    }
  }


  render(){
    let currentlyVisibleState= null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
    }
    return (
      <React.Fragment>
        <p>Keg control</p>
        {currentlyVisibleState}
      </React.Fragment>
      
    )
  }
}

export default KegControl; 