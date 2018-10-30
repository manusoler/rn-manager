import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.label}</Text>
    <TextInput {...props} style={styles.textInputStyle} />
  </View>
);

const styles = {
  viewStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  textInputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export { Input };
