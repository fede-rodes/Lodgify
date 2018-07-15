import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';

import { Todo } from './Todo';

export class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo', id: uniqueId() } ]
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { todos: prevTodos } = prevState;
    const { todos } = this.state;
    if ( prevTodos.length !== todos.length ) {
      document.querySelector('#counter').innerText = todos.length;
    }
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo &&
    this.setState({ todos: [ ...todos, { text: todo, id: uniqueId() } ] });
  };

  handleClickDelete = index => {
    console.log(`Deleting todo number ${index}`); // eslint-disable-line
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <h1>todos</h1>
        <p><span id="counter">1</span> remaining</p>
        <div>
          {todos.length
            ? todos.map((todo, index) => (
              <Todo
                key={todo.id}
                onClickDelete={() => this.handleClickDelete(index)}
                text={todo.text}
              />
            ))
            : 'You\'re all done 🌴'
          }
        </div>
        <div className="todo-input">
          <input
            onChange={this.handleChange}
            placeholder="..."
            type="text"
            value={todo}
          />
          <button onClick={this.handleClickAdd}>Add</button>
        </div>
      </div>
    )
  }

}
