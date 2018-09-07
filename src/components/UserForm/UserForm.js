import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { validateAsync } from './validateAsync';


const renderInput = ({ input, type, label, meta: { touched, error, warning }}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input {...input} type={type} className={`form-control ${touched && error && 'is-invalid'}`}/>
      {touched && <div className="invalid-feedback">{error}</div>}
      {<small>{warning}</small>}
    </div>
  )
}

export class UserForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(validateAsync)} className="container needs-validation">
        <Field name="firstName" component={renderInput} type="text" label="First name"/>
        <Field name="secondName" component={renderInput} type="text" label="Second name"/>
        <Field name="age" component={renderInput} type="number" label="Age" />
        <button type="submit" className="btn btn-primary">Confirm</button>
      </form>
    )
  }
}

const initialValues = {
  firstName: 'Tomasz',
  secondName: 'Bolec',
  age: 22
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

const warn = values => {
  const warnings = {}
  if (values.age < 15) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const UserFormRedux = reduxForm({
  form: 'contact',
  initialValues,
  validate,
  warn
})(UserForm);

export default UserFormRedux;
