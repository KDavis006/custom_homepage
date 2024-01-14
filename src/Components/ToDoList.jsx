import{ useState } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() && inputValue.length <= 40) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleCompleted = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className='TodoListContainer'>
      <input
        className='TodoInput'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo item..."
      />
      <button className='TodoButton' onClick={handleAddItem}>Add Item</button>
      <button className='TodoButton' onClick={handleRemoveCompleted}>Remove Completed</button>
      <ul>
        {todos.map((todo, index) => (
          <div className='TodoItem' key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(index)}
            />
            <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;