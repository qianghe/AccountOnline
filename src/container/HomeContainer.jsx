import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActionsCreator from '@redux/actions/HomeAction';
import Home from '@components/Home';

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    items: state.accountItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(homeActionsCreator, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
