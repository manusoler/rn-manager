import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onLoginPress() {
    this.props.loginUser({
      email: this.props.email,
      password: this.props.password
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@email.com"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.props.error ? (
          <View style={{ backgroundColor: 'white' }}>
            <Text style={styles.error}>{this.props.error}</Text>
          </View>
        ) : null}
        <CardSection>
          {this.props.loading ? (
            <Spinner />
          ) : (
            <Button onPress={this.onLoginPress.bind(this)}>Login</Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
