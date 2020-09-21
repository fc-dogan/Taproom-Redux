import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Keg(props) {
  return (
    <React.Fragment>
      <div>
        <Col style={{padding: '10px'}}>
          <Card style={{ width: '18rem', backgroundColor: '#eadaba', borderColor: '#333' }} >
            <Card.Title>Name: {props.name}</Card.Title>
            <Card.Text>
              <p><strong>Price:</strong> ${props.price}</p>
              <p><strong>pints in keg:</strong> {props.quantity}{props.quantityMessage}</p>
            </Card.Text>
            <Button onClick={() => props.sellKeg(props.id)} variant="outline-secondary" >Sell</Button>
            <Button onClick={() => props.whenKegClicked(props.id)} variant="outline-secondary" >Details</Button>
          </Card>
        </Col>
      </div>
      
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