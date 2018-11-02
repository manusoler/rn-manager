import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Stack key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Stack>
        <Stack key="main">
          <Scene
            key="employeeList"
            component={EmployeeList}
            title="Employee List"
            initial
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Employee Create"
          />
          <Scene
            key="employeeDetail"
            component={EmployeeDetail}
            title="Employee Detail"
          />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;