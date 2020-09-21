import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from 'react-bootstrap';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group>
          <Form.Control 
            type='text'
            name='name'
            placeholder='Kombucha name' />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type='text'
            name='brand'
            placeholder='Brand name' />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type='text'
            name='price'
            placeholder='Price' />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type='text'
            name='flavor'
            placeholder='flavor' />
        </Form.Group>
        <Button type='submit' variant="outline-dark">{props.buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm; 