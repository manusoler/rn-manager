import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeEdit, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  constructor() {
    super();
    this.state = {
      confirm: false
    };
  }

  componentWillMount() {
    // iterate over the employee object that we receive as a prop
    // and update every prop of it in the redux state through employeeUpdate
    _.forEach(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonTextPress() {
    text(this.props.phone, `Your schedule is ${this.props.shift}`);
  }

  onButtonFirePress() {
    this.setState({ confirm: true });
  }

  onAcceptFire() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
    this.setState({ confirm: false });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeEdit({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonTextPress.bind(this)}>
            Text shift
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonFirePress.bind(this)}>Fire</Button>
        </CardSection>

        <Confirm
          visible={this.state.confirm}
          onDecline={() => this.setState({ confirm: false })}
          onAccept={this.onAcceptFire.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeEdit, employeeDelete }
)(EmployeeEdit);
