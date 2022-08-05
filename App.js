import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([ //데이터 배열값을 세팅하고 유지하는 곳
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback( //준비된 배열 함수들을 useCallback이라는 함수를 이용해서 
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo)); //concat은 추가을 의미하는데 todo를 사용해서 배열에 저장
      nextId.current += 1; // nextId 1 씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
export default App;

/* import React from "react";
import { FaInstagramSquare,FaTrashAlt } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";

const App = () => {
    return(
        <>
            <h1>
                일정관리
                <FaInstagramSquare/>
                <FaTrashAlt/>
                <AiFillCamera/>
            </h1>
        </>
    )
}
export default App; */