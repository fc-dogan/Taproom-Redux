import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Card } from 'react-bootstrap';

function KegDetail(props){
  const { selectedKeg , onClickingEdit, onDeletingKeg} = props;
  return (
    <React.Fragment>  
      <Container>
        <Card style={{ backgroundColor: '#eadaba', borderColor: '#333' }} >
          <Card.Body>
            <Card.Title><strong>Name:</strong> {selectedKeg.name}</Card.Title>
              <Card.Text>
                <h5><strong>Brand:</strong> {selectedKeg.brand}</h5>
                <h5><strong>Price:</strong> ${selectedKeg.price}</h5>
                <h5><strong>Flavor:</strong> {selectedKeg.flavor}</h5>
                <h5><strong>pints in keg:</strong> {selectedKeg.quantity}</h5>
              </Card.Text>
            <Button onClick={() => onClickingEdit(selectedKeg.id)} variant="outline-dark">Edit</Button>
            <Button onClick={() =>  onDeletingKeg(selectedKeg.id)} variant="outline-dark">Delete</Button>
          </Card.Body>
         </Card>
      </Container>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onDeletingKeg: PropTypes.func
}

export default KegDetail ; 