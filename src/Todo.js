import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Todo = ({ text, onClickDelete }) => (
  <div className="todo-item">
    {text}
    <span onClick={onClickDelete}>&times;</span>
  </div>
);

Todo.propTypes = {
  text: PropTypes.string,
  onClickDelete: PropTypes.func,
};

Todo.defaultProps = {
  text: '',
  onClickDelete: () => {},
};
