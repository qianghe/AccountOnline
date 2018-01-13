import React, { Component } from 'react';
import Schema from 'async-validator';
import PropTypes from 'prop-types';
import TagList from '../Common/TagList';
import FormItem from '../Common/FormItem';
import './MarkAccount.scss';

const formLayoutStyle = {
  labelCol: 2,
  spanCol: 10,
};

const initialState = {
  timestamp: '',
  timestampError: '',
  cost: '',
  costError: '',
  text: '',
  selectedId: 0,
};

class MarkAccount extends Component {
  static defaultProps = {
    tags: [],
    actions: {},
  }
  static propTypes = {
    tags: PropTypes.array,
    actions: PropTypes.object,
  }
  state = {
    ...initialState,
  }
  componentDidMount() {
    this.props.actions.getAccountTags();
  }
  rules = {
    timestamp: { timestamp: { type: 'string', required: true, message: '请填写时间戳' } },
    cost: { cost: { type: 'string', required: true, message: '请填写消费金额' } },
  }
  clearForm = () => {
    this.setState({
      ...initialState,
    });
  }
  handleFormInput = (e, field) => {
    const descriptor = this.rules[field];
    const validator = new Schema(descriptor);
    let error = null;

    validator.validate({ [field]: e.target.value }, (errors) => {
      if (errors) {
        // console.log('has error', errors);
        [error] = errors;
      }
    });
    this.setState({
      [field]: error ? '' : e.target.value,
      [`${field}Error`]: error ? error.message : '',
    });
  }
  handleSelectItem = (id) => {
    this.setState({
      selectedId: this.state.selectedId === id ? '' : id,
    });
  }
  handleSubmit = () => {
    const { tags } = this.props;
    const {
      timestamp, cost, selectedId, text,
    } = this.state;
    const params = {
      time: timestamp,
      tagId: selectedId,
      cost,
      mark: text,
    };
    const newObj = {
      time: parseInt(timestamp / 1000, 10),
      total: cost,
      lists: [{
        name: tags.filter(tag => tag.id === selectedId)[0].text,
        cost,
        mark: text,
      }],
    };
    this.props.actions.addAccountItem({
      params,
      obj: newObj,
    }).then(code => {
      if (code === 10001) {
        this.clearForm();
      }
    });
  }
  render() {
    const {
      timestamp, timestampError, cost, costError, text,
    } = this.state;
    return (
      <form className="mark-account" onSubmit={this.handleSubmit}>
        <FormItem
          label="时间戳"
          required="true"
          error={timestampError}
          {...formLayoutStyle}
        >
          <input
            type="text"
            value={timestamp}
            onChange={(e) => this.handleFormInput(e, 'timestamp')}
          />
        </FormItem>
        <FormItem
          label="消费"
          required="true"
          error={costError}
          {...formLayoutStyle}
        >
          <input
            type="text"
            value={cost}
            onChange={(e) => this.handleFormInput(e, 'cost')}
          />
        </FormItem>
        <FormItem
          label="标签"
          required="true"
          {...formLayoutStyle}
        >
          <TagList
            {...this.props}
            selectedId={this.state.selectedId}
            handleSelectItem={this.handleSelectItem}
          />
        </FormItem>
        <FormItem
          label="描述"
          {...formLayoutStyle}
        >
          <input
            value={text}
            type="text"
            onChange={(e) => { this.setState({ text: e.target.value }); }}
          />
        </FormItem>
        <button type="submit">&larr;上缴</button>
      </form>
    );
  }
}

export default MarkAccount;
