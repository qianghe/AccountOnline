import { dispatchCors } from '@lib/fetchDispatch';
import {
  SET_ACCOUNT_ITEMS, DEL_ACCOUNT_ITEM, ADD_ACCOUNT_ITEM, EDIT_ACCOUNT_ITEM,
} from '../actionTypes';

const setAccountItems = (items) => {
  return {
    type: SET_ACCOUNT_ITEMS,
    payload: items,
  };
};

export const delAccountItem = (id) => {
  return {
    type: DEL_ACCOUNT_ITEM,
    payload: id,
  };
};

export const editAccountItem = (item) => {
  return {
    type: EDIT_ACCOUNT_ITEM,
    payload: item,
  };
};

export const addAccountItem = () => {
  return {
    type: ADD_ACCOUNT_ITEM,
    payload: item,
  };
};

export const getAccountItems = () => {
  return dispatch => dispatchCors({
    url: '/account/list',
    method: 'get',
  }).then(({ respCode, respData }) => {
    if (respCode === 10001) {
      dispatch(setAccountItems(respData));
    }
  });
};
