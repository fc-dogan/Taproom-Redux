import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";


function EditKegForm(props){

  const handleEditKegFormSubmission =(event) => {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      flavor: event.target.flavor.value,
      quantity: props.selectedKeg.quantity,
      id: props.selectedKeg.id
    })
  } 

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditKegFormSubmission} buttonText="Update" />
    </React.Fragment>
  )
}

EditKegForm.propTypes = {
  selectedKeg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm; 