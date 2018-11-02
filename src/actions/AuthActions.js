import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SET_LOADING,
  SET_USER,
  SET_ERROR
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: SET_LOADING });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() =>
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() =>
          dispatch({
            type: SET_ERROR,
            payload: 'Authentication failed'
          })
        )
    );
};

const loginUserSuccess = (dispatch, user) =>
  dispatch({
    type: SET_USER,
    payload: user
  });
