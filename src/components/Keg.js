import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <React.Fragment>
    <div onClick={() => props.whenKegClicked(props.id)}>
      <h2><strong>Name:</strong> {props.name}</h2>
      <h3><strong>Brand:</strong> {props.brand}</h3>
      <h3><strong>price:</strong> ${props.price}</h3>
      <h3><strong>Flavor:</strong> {props.flavor}</h3>
      <h3><strong>Quantity:</strong> {props.quantity}</h3>
    </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  whenKegClicked: PropTypes.func,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
}

export default Keg; 