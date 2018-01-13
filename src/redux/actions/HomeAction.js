import { dispatchCors } from '@lib/fetchDispatch';
import {
  SET_ACCOUNT_ITEMS, DEL_ACCOUNT_ITEM, ADD_ACCOUNT_ITEM, EDIT_ACCOUNT_ITEM,
  SET_ACCOUNT_TAGS,
} from '../actionTypes';

const setItems = (items) => {
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

const addItem = (item) => {
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
      dispatch(setItems(respData));
    }
  });
};

export const addAccountItem = ({ params, obj }) => {
  return dispatch => dispatchCors({
    url: '/account/add',
    method: 'post',
    params,
  }).then(({ respCode, respData }) => {
    if (respCode === 10001) {
      dispatch(addItem({
        id: respData.id,
        ...obj,
      }));
    }
    return respCode;
  });
};

const setAccountTags = (tags) => {
  return {
    type: SET_ACCOUNT_TAGS,
    payload: tags,
  };
};

export const getAccountTags = () => {
  return dispatch => dispatchCors({
    url: '/account/tags',
    method: 'get',
  }).then(({ respCode, respData }) => {
    if (respCode === 10001) {
      dispatch(setAccountTags(respData));
    }
    return respData;
  });
};
