import './App.css';

import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const onAddTodo = () => {
    addTodoInTodoList({
      id: Math.floor(Math.random() * 100),
      value: todo
    });
    setTodo("");
  }
  const addTodoInTodoList = (item) => {
    setTodoList([...todoList, item])
  }
  const deleteItem = (id) => {
    const todosAfterDelete = todoList.filter(todItem => todItem.id !== id)
    setTodoList(todosAfterDelete);
  }
  return (
    <div>
      <h1>My Todo App</h1>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <button onClick={onAddTodo}>Add</button>
        <ul>
          {
            todoList.map((item, index) => {
              return (
                <li key={index}>
                  <span onClick={() => deleteItem(item.id)} className="delete-icon">X </span>
                  <span style={{padding: '0 10px'}}>{item.value}</span>
                </li>
              )
            })
          }
        </ul>
    </div>
  );
}


export default App;
