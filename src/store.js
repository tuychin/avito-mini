/*
Redux Store
*/

import { createStore } from 'redux';

import reducer from './reducer';

//This function accepts the app state, and saves it to localStorage
const saveState = async (state) => {
  try {
      //Convert the state to a JSON string 
      const serialisedState = JSON.stringify(state);

      //Save the serialised state to localStorage against the key 'app_state'
      await window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
      console.warn(`Could not save state to localStorage: ${err}`);
      
  }
};

//This function checks if the app state is saved in localStorage
const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('app_state');

      if (!serialisedState) return undefined;

      return JSON.parse(serialisedState);
  } catch (err) {
      return undefined;
  }
};

const oldState = loadState();
const store = createStore(reducer, oldState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;