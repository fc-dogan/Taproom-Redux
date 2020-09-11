import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr />
      <p>Keg list</p>
      {props.kegList.map( keg => 
        <Keg 
          name={keg.name}
          brand={keg.brand} 
          price={keg.price} 
          flavor={keg.flavor} 
          quantity={keg.quantity}
          />
      )}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList ; 