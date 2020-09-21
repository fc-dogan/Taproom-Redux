import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Keg(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '18rem' }} >
        <Card.Title>Name: {props.name}</Card.Title>
        <Card.Text>
          <p><strong>Price:</strong> ${props.price}</p>
          <p><strong>pints in keg:</strong> {props.quantity}{props.quantityMessage}</p>
        </Card.Text>
        <button onClick={() => props.sellKeg(props.id)}>Sell</button>
        <button onClick={() => props.whenKegClicked(props.id)} >Details</button>
      </Card>
    
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
  quantityMessage: PropTypes.string,
  id: PropTypes.string,
}

export default Keg; 