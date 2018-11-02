import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  render() {
    const PickerItem = Picker.Item;
    return (
      <Card>
        <CardSection>
          <Input
            name=""
            label="Name"
            placeholder="Pedro Hernández"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'name', value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="666 666 666"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'phone', value: text })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={text =>
              this.props.employeeUpdate({ prop: 'shift', value: text })
            }
          >
            <PickerItem label="Monday" value="Monday" />
            <PickerItem label="Tuesday" value="Tuesday" />
            <PickerItem label="Wednesday" value="Wednesday" />
            <PickerItem label="Thursday" value="Thursday" />
            <PickerItem label="Friday" value="Friday" />
            <PickerItem label="Saturday" value="Saturday" />
            <PickerItem label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
