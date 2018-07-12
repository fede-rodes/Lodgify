import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    todo: '',
  }

  handleChange = (event) => {
    this.setState({ todo: event.target.value })
  };

  handleClickAdd = () => {
    const { onSubmit } = this.props;
    const { todo } = this.state;

    // Pass event up to parent component
    onSubmit(todo);
  }

  render() {
    const { todo } = this.state;
    return (
      <div className="todo-input">
        <input
          onChange={this.handleChange}
          placeholder="..."
          type="text"
          value={todo}
        />
        <button onClick={this.handleClickAdd}>Add</button>
      </div>
    )
  }

}

AddTodo.propTypes = {
  onSubmit: PropTypes.func,
};

AddTodo.defaultProps = {
  onSubmit: () => {},
};
