import React from 'react';
import KegList from './KegList';

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
      </React.Fragment>
      
    )
  }
}

export default KegControl; 