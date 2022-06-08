import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

const TodoContainer = ({ id }) => {
  const [state, setState] = useState({
    todos: [],
  });
  return (
    <div id={id}>
      <TodoList id="todo-list" todos={state.todos} />
    </div>
  );
};

TodoContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TodoContainer;
