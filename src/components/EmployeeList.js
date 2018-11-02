import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { employeesFetch } from '../actions/EmployeeActions';

class EmployeeList extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.employees}
          keyExtractor={empl => empl.uid}
          renderItem={({ item }) => <ListItem employee={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employeeForm.employees, (val, uid) => ({
    ...val,
    uid
  }));
  console.log(employees);
  return {
    employees
  };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
