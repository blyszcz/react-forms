import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import UserForm from './components/UserForm/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

class App extends Component {
  onSubmit = values => console.log(values);

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <UserForm onSubmit={this.onSubmit}/>
        </div>
      </Provider>
    );
  }
}

export default App;
