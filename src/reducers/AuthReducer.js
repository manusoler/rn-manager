import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SET_USER,
  SET_ERROR,
  SET_LOADING
} from '../actions/types';

const initState = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (authReducer = (state = initState, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SET_USER:
      return { ...state, ...initState, user: action.payload, error: '' };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_LOADING:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
});
