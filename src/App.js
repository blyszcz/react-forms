import React, { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';

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
