import { EMPLOYEE_UPDATE } from '../actions/types';

const initState = {};

export default (state = initState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
