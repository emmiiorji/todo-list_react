import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.todo = props.todo;
  }

  render() {
    return <li>{this.todo.title}</li>;
  }
}

export default TodoItem;
