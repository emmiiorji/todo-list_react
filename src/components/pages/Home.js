import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import InputTodo from '../InputTodo';
import TodoList from '../TodoList';
import Header from '../Header';

const Home = () => {
  function getInitialState() {
    const savedState = JSON.parse(localStorage.getItem('todoState'));
    return savedState || [];
  }

  const [todos, setTodos] = useState(getInitialState());

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map(
      (todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      },
    ));
  };

  const addTodoItem = (title) => {
    const todo = {
      id: uuid(),
      title,
      completed: false,
    };
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    localStorage.setItem('todoState', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="inner">
        <Header id="header" />
        <InputTodo addTodoProps={addTodoItem} />
        <TodoList
          id="todo-list"
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default Home;
