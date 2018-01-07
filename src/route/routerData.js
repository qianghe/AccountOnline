/*eslint import/no-webpack-loader-syntax:0 */
import LoginContainer from '@components/../container/LoginContainer';
// import LoadHomeContainer from 'bundle-loader?lazy!../container/HomeContainer';
import HomePage from '@components/Home';

const routerData = [{
  path: '/login',
  needBundleLoad: false,
  component: LoginContainer,
}, {
  path: '/home',
  needBundleLoad: false,
  component: HomePage,
}];

export default routerData;
