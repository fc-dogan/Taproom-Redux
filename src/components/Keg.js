import React from 'react';
import PropTypes from 'prop-types';


function Keg(props) {
  return (
    <React.Fragment>
    <p>Keg</p>
    <h2><strong>Name:</strong> {props.name}</h2>
    <h3><strong>Brand:</strong> {props.brand}</h3>
    <h3><strong>price:</strong> ${props.price}</h3>
    <h3><strong>Flavor:</strong> {props.flavor}</h3>
    <h3><strong>Quantity:</strong> {props.quantity}</h3>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  quantity: PropTypes.number
}

export default Keg; 