import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  const { selectedKeg } = props;
  return (
    <React.Fragment>  
      <h3><strong>Name:</strong> {selectedKeg.name}</h3>
      <h3><strong>Brand:</strong> {selectedKeg.brand}</h3>
      <h3><strong>Price:</strong> ${selectedKeg.price}</h3>
      <h3><strong>Flavor:</strong> {selectedKeg.flavor}</h3>
      <h3><strong>Quantity:</strong> {selectedKeg.quantity}</h3>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
}

export default KegDetail ; 