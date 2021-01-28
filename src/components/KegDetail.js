import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Card } from 'react-bootstrap';

function KegDetail(props){
  const { selectedKeg , onClickingEdit, onDeletingKeg} = props;

  const kegDetailStyles = {
    marginTop: '2%',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
      <Container>
        <Card style={kegDetailStyles} >
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}><strong>{selectedKeg.name}</strong> </Card.Title>
              <Card.Text> 
                <li>Brand: <strong>{selectedKeg.brand}</strong></li>
                <li>Price: <strong>${selectedKeg.price}</strong></li>
                <li>Flavor:<strong>{selectedKeg.flavor}</strong> </li>
                <li>Pints in keg:<strong> {selectedKeg.quantity}</strong></li>               
              </Card.Text>
            <Button onClick={() => onClickingEdit(selectedKeg.id)} variant="outline-dark">Edit</Button>
            <Button onClick={() =>  onDeletingKeg(selectedKeg.id)} variant="outline-dark">Delete</Button>
          </Card.Body>
         </Card>
      </Container>
  )
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onDeletingKeg: PropTypes.func
}

export default KegDetail ; 