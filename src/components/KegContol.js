import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegFrom';

class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render(){
    return (
      <React.Fragment>
        <p>Keg control</p>
        <KegList />
        <NewKegForm />
      </React.Fragment>
      
    )
  }
}

export default KegControl; 