import React from 'react';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';
import { v4 } from 'uuid';

function NewKegForm(props){

  const handleNewKegFormSubmission =(event) => {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseInt(event.target.price.value),
      flavor: event.target.flavor.value,
      quantity: 4,
      quantityMessage: null,
      id: v4()
    })
  } 

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission} buttonText="Add" />
    </React.Fragment>
  )
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegForm; 