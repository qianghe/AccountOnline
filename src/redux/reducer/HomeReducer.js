import {
  SET_ACCOUNT_ITEMS, DEL_ACCOUNT_ITEM, ADD_ACCOUNT_ITEM, EDIT_ACCOUNT_ITEM,
  SET_ACCOUNT_TAGS,
} from '../actionTypes';

const accountItems = (state = [], action) => {
  let itemIndex;
  let editItem;
  switch (action.type) {
    case SET_ACCOUNT_ITEMS:
      return [...action.payload];
    case DEL_ACCOUNT_ITEM:
      state.some((item, index) => {
        if (item.id === action.payload) {
          itemIndex = index;
          return true;
        }
        return false;
      });
      state.splice(itemIndex, 1);
      return [...state];
    case ADD_ACCOUNT_ITEM:
      state.some((item, index) => {
        if (item.id === action.payload.id) {
          itemIndex = index;
          return true;
        }
        return false;
      });
      if (itemIndex !== undefined) {
        editItem = state[itemIndex];
        editItem = {
          id: editItem.id,
          time: editItem.time,
          total: parseInt(action.payload.total, 10) + parseInt(editItem.total, 10),
          lists: [
            ...action.payload.lists,
            ...editItem.lists,
          ],
        };
        state.splice(itemIndex, 1, editItem);
      } else {
        state.unshift(action.payload);
      }
      return [...state];
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

const accountTags = (state = [], action) => {
  switch (action.type) {
    case SET_ACCOUNT_TAGS:
      return [...action.payload];
    default:
      return state;
  }
};
export default {
  accountItems,
  accountTags,
};
