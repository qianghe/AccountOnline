import React from 'react';
import createHistory from 'history/createHashHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import storeCreator from '@redux/store';
import Loading from '@components/Common/Loading';
import NoMatch from '@components/Common/NoMatch';
import routerData from './routerData';
import PrivateRoute from './PrivateRoute';
import Bundle from './Bundle';

const history = createHistory();
const store = storeCreator(history);

const createComponent = (component) => (props) => {
  return (
    <Bundle load={component}>
      {
        (Component) => Component ? <Component {...props} /> : <Loading />
      }
    </Bundle>
  );
};

const RouteConfig = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="rooter-wrap">
        <Switch>
          {
            routerData.map(route => (
              <PrivateRoute
                key={route.path}
                path={route.path}
                component={route.needBundleLoad ?
                  createComponent(route.component) : route.component}
              />
            ))
          }
          <Route component={NoMatch} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default RouteConfig;
