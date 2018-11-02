import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import employeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: authReducer,
  employeeForm: employeeFormReducer
});
