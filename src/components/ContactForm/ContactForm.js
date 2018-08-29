import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

export class ContactForm extends Component {
  render() {
    return (
      <div className='contact-form'>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="firstName" component="input" type="text" placeholder="Type first name..."/>
          <Field name="secondName" component="input" type="text" placeholder="Type second name..."/>
          <Field name="yearsOld" component="input" type="number" placeholder="Type years old..."/>
        </form>
      </div>
    )
  }
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
