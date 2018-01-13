import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const TagList = ({ tags, selectedId, handleSelectItem }) => (
  <ul className="account-tags">
    {
      tags.map(tag => (
        <li
          key={`account-tag-${tag.id}`}
          className={classNames({
            'account-tags-item': true,
            'account-tags-item--selected': selectedId === tag.id,
          })}
          /*eslint jsx-a11y/no-noninteractive-element-interactions: 0*/
          onClick={() => handleSelectItem(tag.id)}
        >
          {tag.text}
        </li>
      ))
    }
  </ul>
);

TagList.defaultProps = {
  selectedId: 0,
  tags: [],
  handleSelectItem: () => {},
};
TagList.propTypes = {
  selectedId: PropTypes.number,
  tags: PropTypes.array,
  handleSelectItem: PropTypes.func,
};

export default TagList;
