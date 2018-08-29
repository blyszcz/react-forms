import React, { Component } from 'react';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { ContactForm } from './components/ContactForm/ContactForm';
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ContactForm />
        </div>
      </Provider>
    );
  }
}

export default App;
