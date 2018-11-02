import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
  onInputChange(text, evt) {
    this.props.employeeUpdate({ prop: evt.target.name, value: text });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            name=""
            label="Name"
            placeholder="Pedro Hernández"
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="666 666 666"
            value={this.props.phone}
          />
        </CardSection>
        <CardSection>
          <Input label="Shift" placeholder="" value={this.props.shift} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Actions.pop()}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  name: state.employeeForm.name,
  phone: state.employeeForm.phone,
  shift: state.employeeForm.shift
});

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeCreate);
