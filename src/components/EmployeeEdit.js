import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeEdit } from '../actions';
import { Card, CardSection, Button } from './common';

class EmployeeEdit extends Component {
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

  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(this.props);
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
  { employeeUpdate, employeeEdit }
)(EmployeeEdit);
