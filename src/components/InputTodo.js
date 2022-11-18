import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoProps }) => {
  const [InputTitle, setTitle] = useState({
    title: '',
  });

  const handleInput = (e) => {
    setTitle({
      ...InputTitle,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (InputTitle.title.trim()) {
      addTodoProps(InputTitle.title);
      setTitle({
        title: '',
      });
    } else {
      // Do nothing
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        name="title"
        value={InputTitle.title}
        onChange={handleInput}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
