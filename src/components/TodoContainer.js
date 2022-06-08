import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import Header from './Header';

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

  const handleChange = (id) => {
    setState((state) => {
      const todos = state.todos.map((todo) => {
        let { completed } = todo;
        if (todo.id === id) {
          completed = !completed;
        }
        return { ...todo, ...{ completed } };
      });
      return { ...state, ...{ todos } };
    });
  };

  return (
    <div id={id}>
      <Header id="header" />
      <TodoList id="todo-list" todos={state.todos} onStatusChange={handleChange} />
    </div>
  );
};

TodoContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TodoContainer;
