import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

const onSubmit = values => {
  console.log('Submit!');
  console.log(values);
}

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'First name is required'
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less'
  }

  if (!values.age) {
    errors.age = 'Age is required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }

  return errors;
}

const initialValues = {
  firstName: 'Dawid',
}

const TextInput = ({ label, input, meta: { error, touched } }) => (
  <div className="form-group">
      <label>{label}</label>
      <input
        className={`form-control ${error && touched && 'is-invalid'}`}
        {...input}
      />
      {error && touched && <div className="invalid-feedback">{error}</div>}
    </div>
);

const UserForm = () => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={initialValues}
    render={({ handleSubmit, submitting }) => (
      <form onSubmit={handleSubmit} className="container need-validations">
        <Field
          name="firstName"
          component={TextInput}
          type="text"
          label="First Name"
        />
        <Field
          name="secondName"
          component={TextInput}
          type="text"
          label="Second Name"
        />
        <Field
          name="age"
          component={TextInput}
          type="number"
          label="Age"
        />
        <button className="btn btn-primary" type="submit" disabled={submitting}>
          Confirm
        </button>
      </form>
    )}
    >
  </Form>
);

export default UserForm;
