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
  firstName: 'Stolec',
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

const formikEnhances = withFormik({
  mapPropsToValues: () => (initialValues),
  handleSubmit: (values, { setSubmitting }) => {
    console.log('submit');
    console.log(values);
    // LoginToMyApp(values).then(
    //   user => {
    //     setSubmitting(false);
    //     // props.updateUser(user)
    //   },
    //   errors => {
    //     setSubmitting(false);
    //     setErrors(transformMyApiErrors(errors));
    //   }
    // );
  },
  validate
});

export default formikEnhances(ContactForm);
