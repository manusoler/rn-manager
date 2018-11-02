import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import firebaseInit from './config/firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebaseInit();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
