import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <React.Fragment>
    <div onClick={() => props.whenKegClicked(props.id)}>
      <h3><strong>Name:</strong> {props.name}</h3>
      <h3><strong>Price:</strong> ${props.price}</h3>
      <h3><strong>Quantity:</strong> {props.quantity}</h3>
    </div>
      <button onClick={() => props.sellKeg(props.id)}>Sell</button>
    </React.Fragment>
  )
}

Keg.propTypes = {
  sellKeg: PropTypes.func,
  whenKegClicked: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
}

export default Keg; 