import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as spaceActionsCreator from '@redux/actions/SpaceAction';
import AdSpace from '@components/AdSpace';

const mapStateToProps = (state) => {
  return {
    items: state.spaceItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(spaceActionsCreator, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdSpace);
