import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducer';

export default (history) => {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(history),
  ];
  if (process.env.NODE_ENV === 'develop') {
    middlewares.push(logger);
  }
  return createStore(
    combineReducers({
      ...reducers,
      router: routerReducer,
    }),
    applyMiddleware(...middlewares),
  );
};
