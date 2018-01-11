import UserReducer from './UserReducer';
import HomeReducer from './HomeReducer';

const reducers = {
  ...UserReducer,
  ...HomeReducer,
};

export default reducers;
