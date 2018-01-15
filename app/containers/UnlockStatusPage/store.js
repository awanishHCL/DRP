// ./store.js
import {
  createStore,
  applyMiddleware,
} from 'redux';
import {
  combineForms,
  createForms, // optional
} from 'react-redux-form';

const initialUnlockState = {
  imei: '',
  unlocknumber: '',
};

// If you want your entire store to have the form state...
const store = createStore(combineForms({
  checkUnlockStatus: initialUnlockState,
}));


export default store;
