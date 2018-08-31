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
    console.log(this.props);
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
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    )
  }
}

const formikEnhances = withFormik({
  mapPropsToValues: () => ({ firstName: 'x', secondName: 'ds', age: '' }),
  handleSubmit: (payload, { setSubmitting }) => {
    console.log('submit');
    console.log(payload);
  }
});

export default formikEnhances(ContactForm);