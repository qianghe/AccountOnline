import { USER_LOGIN, USER_LOGOUT } from '../actionTypes';

const initialState = {
  username: '',
  avatar: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username: action.payload.username,
        avatar: action.payload.avatar,
      };
    case USER_LOGOUT:
      return Object.assign({}, state, {
        username: '',
        avatar: '',
      });
    default:
      return state;
  }
};

export default {
  user,
};
