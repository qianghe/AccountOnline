import { Component } from 'react';
import PropTypes from 'prop-types';

class Bundle extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      mod: null,
    };
  }
  componentWillMount() {
    this.load(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }
  load(props) {
    this.setState({
      mod: null,
    });
    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod,
      });
    });
  }
  render() {
    if (!this.state.mod) return false;
    return this.props.children(this.state.mod);
  }
}

export default Bundle;
