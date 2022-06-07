import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.todos = props.todos;
  }

  render() {
    return (
      <ul id={this.id}>
        {this.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    );
  }
}
