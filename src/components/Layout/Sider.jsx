import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './sider.scss';

const menus = [{
  name: '记一下账',
  link: '/home',
}, {
  name: '图表',
  link: '/chart',
}];

class Sider extends Component {
  static defaultProps = {
    location: {},
  }
  static propTypes = {
    location: PropTypes.object,
  }
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="home-sider">
        {
          menus.map(menu => (
            <section
              key={`${menu.link}`}
              className={classNames({ selected: menu.link === this.props.location.pathname })}
            >
              <Link
                to={menu.link}
                replace={menu.link === this.props.location.pathname}
              >
                <span>{menu.name}</span>
              </Link>
            </section>
          ))
        }
      </div>
    );
  }
}

export default Sider;
