import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, SafeAreaView } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import firebaseInit from './config/firebase';

class App extends Component {
  componentWillMount() {
    firebaseInit();
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Text>Hello!</Text>
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
