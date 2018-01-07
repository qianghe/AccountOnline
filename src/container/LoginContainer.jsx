import { connect } from 'react-redux';
import Login from '@components/Login';
import { userLogin } from '@redux/actions/UserAction';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (obj) => {
      return dispatch(userLogin(obj));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
