import { combineReducers } from 'redux';
import * as types from '../types';
import * as deps from '../deps';

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCEED:
      return true;
    case types.LOGOUT_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const userId = (state = null, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCEED:
      return action.userId;
    case types.LOGOUT_SUCCEED:
      return null;
    default:
      return state;
  }
};

export const isLoggingIn = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_REQUESTED:
      return true;
    case types.LOGIN_FAILED:
    case types.LOGIN_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const loginStatus = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_STATUS_CHANGED:
      return action.status;
    case types.LOGIN_SUCCEED:
    case types.LOGIN_FAILED:
      return false;
    default:
      return state;
  }
};

export const loginError = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_FAILED:
      return action.error;
    case types.LOGIN_REQUESTED:
    case types.LOGIN_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const isLoggingOut = (state = false, action) => {
  switch (action.type) {
    case types.LOGOUT_REQUESTED:
      return true;
    case types.LOGOUT_FAILED:
    case types.LOGOUT_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const logoutStatus = (state = false, action) => {
  switch (action.type) {
    case types.LOGOUT_STATUS_CHANGED:
      return action.status;
    case types.LOGOUT_SUCCEED:
    case types.LOGOUT_FAILED:
      return false;
    default:
      return state;
  }
};

export const logoutError = (state = false, action) => {
  switch (action.type) {
    case types.LOGOUT_FAILED:
      return action.error;
    case types.LOGOUT_REQUESTED:
    case types.LOGOUT_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const isCreatingAccount = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_REQUESTED:
      return true;
    case types.CREATE_ACCOUNT_FAILED:
    case types.CREATE_ACCOUNT_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const createAccountStatus = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_STATUS_CHANGED:
      return action.status;
    case types.CREATE_ACCOUNT_SUCCEED:
    case types.CREATE_ACCOUNT_FAILED:
      return false;
    default:
      return state;
  }
};

export const createAccountError = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_FAILED:
      return action.error;
    case types.CREATE_ACCOUNT_REQUESTED:
    case types.CREATE_ACCOUNT_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const isFirstLogin = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_ACCOUNT_SUCCEED:
      return true;
    case types.LOGOUT_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const redirectAfterLogin = (state = '/sites', action) => {
  switch (action.type) {
    case deps.types.ROUTER_DID_CHANGE:
      if (
        state === '/sites' &&
          (action.payload.location.pathname === '/login' ||
            action.payload.location.pathname === '/register')
      ) {
        return action.payload.location.query.next || '/sites';
      }
      return state;
    case types.LOGOUT_SUCCEED:
      return '/sites';
    default:
      return state;
  }
};

export const isForgotPasswordRequested = (state = false, action) => {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUESTED:
      return true;
    case types.FORGOT_PASSWORD_FAILED:
    case types.FORGOT_PASSWORD_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const forgotPasswordStatus = (state = false, action) => {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUESTED:
      return 'Sending email...';
    case types.FORGOT_PASSWORD_FAILED:
      return false;
    case types.FORGOT_PASSWORD_SUCCEED:
      return 'Sent! Please check your email and use the link to reset your password.';
    default:
      return state;
  }
};

export const forgotPasswordError = (state = false, action) => {
  switch (action.type) {
    case types.FORGOT_PASSWORD_REQUESTED:
    case types.FORGOT_PASSWORD_SUCCEED:
      return false;
    case types.FORGOT_PASSWORD_FAILED:
      return action.error.error === 'email-doesnt-exist'
        ? 'Email not registered. Please try again or contact support@worona.org'
        : 'Something went wrong. Please try again or contact support@worona.org';
    default:
      return state;
  }
};

export const isRecoverPasswordRequested = (state = false, action) => {
  switch (action.type) {
    case types.RECOVER_PASSWORD_REQUESTED:
      return true;
    case types.RECOVER_PASSWORD_FAILED:
    case types.RECOVER_PASSWORD_SUCCEED:
      return false;
    default:
      return state;
  }
};

export const recoverPasswordStatus = (state = false, action) => {
  switch (action.type) {
    case types.RECOVER_PASSWORD_REQUESTED:
      return 'Saving your new password...';
    case types.RECOVER_PASSWORD_FAILED:
      return false;
    case types.RECOVER_PASSWORD_SUCCEED:
      return 'Saved! Go can back to the login page now.';
    default:
      return state;
  }
};

export const recoverPasswordError = (state = false, action) => {
  switch (action.type) {
    case types.RECOVER_PASSWORD_REQUESTED:
    case types.RECOVER_PASSWORD_SUCCEED:
      return false;
    case types.RECOVER_PASSWORD_FAILED:
      return action.error.reason === 'Token expired' ?
        'Your email link has expired. Please go to the Forgot Password screen and ask for another one.' :
        'Something went wrong. Please try again or contact support@worona.org';
    default:
      return state;
  }
};

export default () => combineReducers({
  isLoggedIn,
  userId,
  isLoggingIn,
  loginError,
  loginStatus,
  isLoggingOut,
  isCreatingAccount,
  createAccountError,
  createAccountStatus,
  isFirstLogin,
  redirectAfterLogin,
  isForgotPasswordRequested,
  forgotPasswordStatus,
  forgotPasswordError,
  isRecoverPasswordRequested,
  recoverPasswordStatus,
  recoverPasswordError,
});
