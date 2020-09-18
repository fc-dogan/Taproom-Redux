import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr />
      <p>Keg list</p>
      {Object.values(props.kegList).map(keg => {
        return <Keg 
          whenKegClicked = {props.onKegSelection}
          sellKeg = {props.onchangeKegQuantity}
          name={keg.name}
          brand={keg.brand} 
          price={keg.price} 
          flavor={keg.flavor} 
          quantity={keg.quantity}
          quantityMessage={keg.quantityMessage}
          id= {keg.id}
          key= {keg.id}
          />
      })}
    </React.Fragment>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onchangeKegQuantity: PropTypes.func
}

export default KegList ; 