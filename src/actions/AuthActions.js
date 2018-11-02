import {
  EMAIL_CHANGED,
  LOGIN_USER,
  PASSWORD_CHANGED,
  SET_LOADING
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = dispatch => (email, password) => {
  dispatch({ type: SET_LOADING });

  const user = null;

  return {
    type: SET_USER,
    payload: user
  };
};
