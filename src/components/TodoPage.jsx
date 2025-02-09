import React, { useState } from 'react';
import Img from '../assets/todo-background.jpeg'

const TodoPage = () => {
  const [userData, setUserData] = useState({
    todos: [],
    input: '',
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setUserData({ ...userData, input: value });
  };

  const addTodo = () => {
    if (userData.input.trim()) {
      setUserData({
        ...userData,
        todos: [...userData.todos, userData.input],
        input: '',
      });
    }
  };
  

  const deleteTodo = (index) => {
    const updatedTodos = userData.todos.filter((_, i) => i !== index);
    setUserData({ ...userData, todos: updatedTodos });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center p-6 bg-white bg-opacity-80 shadow-lg rounded-lg w-96">
        <h1 className="text-3xl font-semibold text-blue-600 mb-5">To-Do List</h1>

        <div className="flex flex-col w-full mb-4">
          <input
            value={userData.input}
            onChange={handleChange}
            type="text"
            placeholder="Enter your task"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Add Task
          </button>
        </div>

        <div className="flex flex-col mt-5 w-full">
          <ul className="list-disc list-inside">
            {userData.todos.map((todo, index) => (
              <li key={index} className="flex justify-between items-center p-2 border-b border-gray-300">
                {todo}
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

