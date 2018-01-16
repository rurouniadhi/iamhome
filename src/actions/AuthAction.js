import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from './types';

export const loginUser = (dispatch) => {
  dispatch({ type: LOGIN_USER });
  GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      loginUserSuccess(dispatch, user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
      loginUserFail(dispatch);
    })
    .done();
};

export const logoutUser = (dispatch) => {
  dispatch({ type: LOGOUT_USER });
  GoogleSignin.signOut()
  .then(() => {
    console.log('out');
    logoutUserSuccess();
  })
  .catch((err) => {
    console.log(err);
  });
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS
  });
  Actions.auth();
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
