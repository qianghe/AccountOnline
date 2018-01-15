/*eslint import/no-webpack-loader-syntax:0 */
import LoginContainer from '@components/../container/LoginContainer';
import LoadHomeContainer from 'bundle-loader?lazy!../container/HomeContainer';
import LoadChartContainer from 'bundle-loader?lazy!../components/Chart';

const routerData = [{
  path: '/login',
  needBundleLoad: false,
  component: LoginContainer,
}, {
  path: '/home',
  needBundleLoad: true,
  component: LoadHomeContainer,
}, {
  path: '/chart',
  needBundleLoad: true,
  component: LoadChartContainer,
}];

export default routerData;
