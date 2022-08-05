import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          todo={todo} //데이터값
          key={todo.id} //id 카운팅
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
