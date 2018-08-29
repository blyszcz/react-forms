import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

function testReducer(state = 0, action) {
  console.log('=====');
  console.log(state);
  console.log('=====');
  console.log(action);
  console.log('=====');
  return state;
}

const rootReducer = combineReducers({
  form: formReducer,
  testReducer
});

export default rootReducer;
