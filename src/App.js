import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

class App extends Component {
  onSubmit = values => console.log(values);

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ContactForm onSubmit={this.onSubmit}/>
        </div>
      </Provider>
    );
  }
}

export default App;
