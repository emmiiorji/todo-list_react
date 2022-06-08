import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

const TodoContainer = ({ id }) => {
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
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
