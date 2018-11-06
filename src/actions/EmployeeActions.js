import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  CLEAR_DATA,
  SET_ERROR,
  EMPLOYESS_FETCH_SUCCESS
} from './types';

export const employeesFetch = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYESS_FETCH_SUCCESS, payload: snapshot.val() });
    });
};

export const employeeEdit = ({ name, phone, shift, uid }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({
        type: CLEAR_DATA
      });
      Actions.main();
    })
    .catch(err => {
      dispatch({
        type: SET_ERROR,
        payload: err
      });
    });
};

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
});

export const employeeCreate = employee => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push(employee, err => {
      if (err) {
        dispatch({
          type: SET_ERROR,
          payload: err
        });
      } else {
        dispatch({
          type: CLEAR_DATA
        });
        Actions.main();
      }
    });
};

export const employeeDelete = ({ uid }) => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .catch(err => {
      dispatch({
        type: SET_ERROR,
        payload: err
      });
    })
    .finally(() => {
      Actions.main();
    });
};
