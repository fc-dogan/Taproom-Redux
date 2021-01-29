import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Keg(props) {
  
  const kegStyles = {
    textAlign: 'center',
    border: '2px solid #3C5C60',
    width: '300px',
    height: '300px',
    padding: '2%',
    margin: '2%',
  };
  
  function inStock(quantity) {
    return quantity > 0 ? <Button onClick={() => props.sellKeg(props.id)} variant="outline-secondary" >Sell</Button>
    : "out of stock"
  };


  return (
    <React.Fragment>
      <div>
        <Col style={{padding: '10px'}}>
          <Card style={kegStyles} >
            <Card.Title style={{backgroundColor: '#8FABAF', padding: '8px'}}> {props.name}</Card.Title>
            <Card.Text>
                <strong>Price:</strong> ${props.price} <br/>
                <strong>pints in keg:</strong> { props.quantity > 0 ? props.quantity : "out of stock" }
            </Card.Text>
            {inStock(props.quantity)}
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
  id: PropTypes.string,
}

export default Keg; 