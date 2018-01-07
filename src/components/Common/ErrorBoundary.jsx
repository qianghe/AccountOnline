import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * [错误catch组件]
 * @type {Object}
 */
class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>检查一下，哪里出了点小问题</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
