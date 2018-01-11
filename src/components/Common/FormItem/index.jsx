import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

const FormItem = (props) => {
  return (
    <div
      className={classNames({
        'form-item': true,
        'form-item--required': props.required === 'true' ? true : false,
      })}
    >
      <span
        className={classNames({
          [`col-${props.labelCol}`]: props.labelCol ? true : false,
        })}
      >
        {props.label}：
      </span>
      <div
        className={classNames({
          [`col-${props.spanCol}`]: props.labelCol ? true : false,
        })}
      >
        {props.children}
      </div>
    </div>
  );
};

FormItem.defaultProps = {
  label: '',
  required: 'false',
  labelCol: 0,
  spanCol: 0,
  children: null,
};

FormItem.propTypes = {
  label: PropTypes.string,
  required: PropTypes.string,
  labelCol: PropTypes.number,
  spanCol: PropTypes.number,
  children: PropTypes.any,
};

export default FormItem;
