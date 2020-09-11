import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { selectedKeg , onClickingEdit, onDeletingKeg} = props;
  return (
    <React.Fragment>  
      <h3><strong>Name:</strong> {selectedKeg.name}</h3>
      <h3><strong>Brand:</strong> {selectedKeg.brand}</h3>
      <h3><strong>Price:</strong> ${selectedKeg.price}</h3>
      <h3><strong>Flavor:</strong> {selectedKeg.flavor}</h3>
      <h3><strong>pints in keg:</strong> {selectedKeg.quantity}</h3>
      <button onClick={() => onClickingEdit(selectedKeg.id)}>Edit</button>
      <button onClick={() =>  onDeletingKeg(selectedKeg.id)}>Delete</button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onDeletingKeg: PropTypes.func
}

export default KegDetail ; 