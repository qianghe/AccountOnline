import {
  SET_ACCOUNT_ITEMS, DEL_ACCOUNT_ITEM, ADD_ACCOUNT_ITEM, EDIT_ACCOUNT_ITEM,
} from '../actionTypes';

const accountItems = (state = [], action) => {
  let itemIndex;
  let editItem;
  switch (action.type) {
    case SET_ACCOUNT_ITEMS:
      return [...action.payload];
    case DEL_ACCOUNT_ITEM:
      state.some(item => {
        if (item.id === action.payload) {
          itemIndex = item.id;
          return true;
        }
        return false;
      });
      state.splice(itemIndex, 1);
      return [...state];
    case ADD_ACCOUNT_ITEM:
      return [aciton.payload, ...state];
    case EDIT_ACCOUNT_ITEM:
      state.some(item => {
        if (item.id === action.payload.id) {
          itemIndex = item.id;
          return true;
        }
        return false;
      });
      editItem = { ...state[itemIndex], ...action.payload };
      state.splice(itemIndex, 1, editItem);
      return [...state];
    default:
      return state;
  }
};

export default {
  accountItems,
};
