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
    const { onStatusChange } = this.props;
    return (
      <ul id={this.id}>
        {this.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onStatusChange={onStatusChange}
          />
        ))}
      </ul>
    );
  }
}

TodoList.propTypes = {
  id: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    ),
  ).isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default TodoList;
