import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS
} from './types';


export const loginUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    GoogleSignin.signIn()
    .then((user) => {
      // console.log(data);
      if (user.email === 'rurouniadhi@gmail.com') {
        loginUserSuccess(dispatch, user);
        const User = GoogleSignin.currentUser();
        console.log(user);
        console.log(`welcome, ${User.name}`);
      } else {
        console.log('you are not allow');
        GoogleSignin.signOut();
        loginUserFail(dispatch, user);
      }
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
      loginUserFail(dispatch);
    })
    .done();
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });

    GoogleSignin.signOut()
    .then(() => {
      logoutUserSuccess(dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
  };
};

const logoutUserSuccess = (dispatch) => {
  dispatch({
    type: LOGOUT_USER_SUCCESS
  });
  Actions.login();
  console.log('out');
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.home();
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
