import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActionsCreator from '@redux/actions/UserAction';
import MainLayout from '../components/Layout';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActionsCreator, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
