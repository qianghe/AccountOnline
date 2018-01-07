import { USER_LOGIN, USER_LOGOUT } from '../actionTypes';

/**
 * [userLogin 用户信息]
 * @param  {[type]} user [description]
 * @return {[type]}      [description]
 */
export const userLogin = (user) => {
  return {
    type: USER_LOGIN,
    payload: user,
  };
};

/**
 * [userLogout 用户退出]
 * @return {[type]} [description]
 */
export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
