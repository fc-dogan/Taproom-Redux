import React from 'react';
import ReusableForm from './ReusableForm';

function NewKegForm(props){

  const handleNewKegFormSubmission =(event) => {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      quantity: event.target.quantity.value,
    })
  } 

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewKegFormSubmission} buttonText="Add" />
    </React.Fragment>
  )
}

export default NewKegForm; 