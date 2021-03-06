/*eslint jsx-a11y/no-noninteractive-element-interactions: 0*/
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './index.scss';

class Select extends Component {
  static defaultProps = {
    placeholder: '',
    defaultValue: '',
    style: {},
    options: [],
    onChange: () => {},
  }
  static propTypes = {
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.array,
    style: PropTypes.object,
    onChange: PropTypes.func,
  }
  constructor(props) {
    super(props);

    this.selectRef = null;

    this.state = {
      toggle: false,
      value: this.props.defaultValue || '',
    };
  }
  componentDidMount() {
    document.addEventListener('click', (e) => {
      if (e.target !== this.selectRef && this.state.toggle) {
        this.handleToggle();
      }
    });
  }
  handleClick = (value) => {
    this.props.onChange(value);
    this.setState({
      toggle: !this.state.toggle,
      value,
    });
  }
  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    const { toggle, value } = this.state;
    const { options, placeholder, style } = this.props;

    return (
      <div
        className="comp-select"
        style={{ ...style }}
      >
        <section
          className={classNames({
            'comp-select-text': true,
            'comp-select-text--placeholder': value ? false : true,
          })}
          ref={el => { this.selectRef = el; }}
          onClick={this.handleToggle}
        >
          {value || placeholder}
          <span
            className={classNames({
              'comp-select-text-arFormItem': true,
              'comp-select-text-arFormItem--up': toggle ? true : false,
            })}
          />
        </section>
        <section
          className={classNames({
            'comp-select-dropdown': true,
            'comp-select-dropdown--toggle': toggle ? true : false,
          })}
        >
          {
            Array.isArray(options) && options.map(option => (
              <li
                key={option}
                className={classNames({
                  'comp-select-dropdown-li--selected': option === value,
                })}
                onClick={() => this.handleClick(option)}
              >
                {option}
              </li>
            ))
          }
        </section>
      </div>
    );
  }
}

export default Select;
