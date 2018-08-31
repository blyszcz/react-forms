import React, { Component } from 'react';
import { withFormik } from 'formik';

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        id={id}
        className={`form-control ${error && 'is-invalid'}`}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

class ContactForm extends Component {
  render() {
    const {
      values,
      touched,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} className="container need-validations">
        <TextInput
          id="firstName"
          type="text"
          label="First Name"
          error={touched.firstName && errors.firstName}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="secondName"
          type="text"
          label="Second Name"
          error={touched.secondName && errors.secondName}
          value={values.secondName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="age"
          type="number"
          label="Age"
          error={touched.age && errors.age}
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
          Confirm
        </button>
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

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validateAsync = (values) => {
  return sleep(2000).then(() => {
    let errors = {};
    if (['Mateusz', 'Dawid', 'Michał'].includes(values.firstName)) {
      errors.secondName = 'Nice try';
    }

    if (Object.keys(errors).length) {
      throw errors;
    }
  });
};

const formikEnhances = withFormik({
  mapPropsToValues: () => (initialValues),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  },
  validate: validateAsync
});

export default formikEnhances(ContactForm);
