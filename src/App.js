import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactForm />
      </div>
    );
  }
}

export default App;
