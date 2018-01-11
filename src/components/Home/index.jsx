/*eslint react/no-array-index-key: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatTime } from '@lib/utils';
import Select from '@components/Common/Select/index';
import MarkAccount from './MarkAccount';
import './index.scss';

const Account = ({ detail }) => (
  <div className="account">
    <div className="account-title">
      <p>{formatTime(detail.time * 1000, '/')}</p>
      <p>&yen;&nbsp;{detail.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
    </div>
    <ul>
      {
        detail.lists.map((item, index) => (
          <li key={`item-${index}`} className="account-item">
            <span>
              {item.name}&nbsp;
              <span className="account-item-mark">
                {item.mark ? `(${item.mark})` : ''}
              </span>
            </span>
            <span>&yen;&nbsp;{item.cost}</span>
          </li>
        ))
      }
    </ul>
  </div>
);
Account.defaultProps = {
  detail: {},
};
Account.propTypes = {
  detail: PropTypes.object,
};

class Home extends Component {
  static defaultProps = {
    items: [],
    actions: {},
  }
  static propTypes = {
    items: PropTypes.array,
    actions: PropTypes.object,
  }
  componentDidMount() {
    this.props.actions.getAccountItems();
  }
  render() {
    const { items } = this.props;
    return (
      <div className="home">
        <section>
          <div className="home-list-title">
            <h3>账单list</h3>
            <Select
              defaultValue="1月"
              options={Array.from({ length: 12 }, (i, index) => `${index + 1}月`)}
              onChange={(value) => { console.log(value); }}
            />
          </div>
          {
            items && items.map((account, index) => (
              <Account key={`account-${index}`} detail={account} />
            ))
          }
        </section>
        <section>
          <h3>记账单</h3>
          <MarkAccount />
        </section>
      </div>
    );
  }
}

export default Home;
