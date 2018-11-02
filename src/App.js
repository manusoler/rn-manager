import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebaseInit from './config/firebase';
import Router from './Router';

class App extends Component {
  constructor() {
    super();
    firebaseInit();
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
