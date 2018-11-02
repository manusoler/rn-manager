import {
  EMPLOYEE_UPDATE,
  CLEAR_DATA,
  EMPLOYESS_FETCH_SUCCESS
} from '../actions/types';

const initState = { employees: [], name: '', phone: '', shift: 'Monday' };

export default (state = initState, action) => {
  switch (action.type) {
    case EMPLOYESS_FETCH_SUCCESS:
      return { ...state, employees: action.payload };
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_DATA:
      return initState;
    default:
      return state;
  }
};
