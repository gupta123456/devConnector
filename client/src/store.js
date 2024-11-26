import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import setAuthToken from './utils/setAuthToken';

/*
  NOTE: set up a store subscription listener
  to store the user's token in localStorage
 */

/*
  initialize current state from redux store for subscription comparison
  preventing undefined error
 */
let currentState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

// Subscription to monitor token changes
store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  const previousState = currentState;
  currentState = store.getState();

  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth?.token !== currentState.auth?.token) {
    const token = currentState.auth?.token;
    setAuthToken(token);
  }
});

export default store;
