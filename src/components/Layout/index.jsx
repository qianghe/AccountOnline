import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Sider from './Sider';
import './index.scss';

/**
 * [页面整体布局组件]
 * @type {Object}
 */
class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    // user: PropTypes.object.isRequired,
    // actions: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ padding: '0 20px' }}>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sider {...this.props} />
          <div className="content" style={{ width: '100%' }}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


export default MainLayout;
