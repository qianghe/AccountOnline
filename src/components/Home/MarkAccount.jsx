import React, { Component } from 'react';
import schema from 'async-validator';
import FormItem from '../Common/FormItem';
import './MarkAccount.scss';

const formLayoutStyle = {
  labelCol: 2,
  spanCol: 10,
};

class MarkAccount extends Component {
  state = {
    timestamp: undefined,
  }
  handleTimeStampInput = (e) => {
    console.log(e.target)
    const descriptor = { timestamp: { type: "array", required: true, message: '请填写时间戳' } }
    const validator = new schema(descriptor);
    validator.validate({ timestamp: e.target.value }, (errors, fields) => {
      if(errors) {
        // validation failed, errors is an array of all errors
        // fields is an object keyed by field name with an array of
        // errors per field
        console.log('has error', errors, fields);
        // return handleErrors(errors, fields);
      }
      this.setState({
        timestamp: e.target.value,
      });
    });
  }
  render() {
    const { timestamp } = this.state;
    return (
      <div className="mark-account">
        <FormItem
          label="时间戳"
          required="true"
          {...formLayoutStyle}
        >
          <input
            type="text"
            name="timestamp"
            value={timestamp}
            rules={[{ required: true, message: '请填写时间戳' }]}
            onChange={(e) => this.handleTimeStampInput(e)}
          />
        </FormItem>
        <FormItem
          label="消费"
          required="true"
          {...formLayoutStyle}
        >
          <input
            type="text"
            rules={[{ required: true, message: '请填写消费金额' }]}
          />
        </FormItem>
        <FormItem
          label="标签"
          required="true"
          {...formLayoutStyle}
        >
          <input
            type="text"
            rules={[{ required: true, message: '请选择标签' }]}
          />
        </FormItem>
        <FormItem
          label="描述"
          {...formLayoutStyle}
        >
          <input type="text" />
        </FormItem>
      </div>
    );
  }
}

export default MarkAccount;
