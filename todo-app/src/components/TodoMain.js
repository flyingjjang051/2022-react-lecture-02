import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function TodoMain() {
  // 리액트에서 제일 힘든거 데이터 전다하기가 힘들다. 그래서 나온게 redux이다.
  // 리액트는 변수를 바꾸는 걸로 화면을 렌더링하지 않는다.
  // 컴퍼넌트
  const initTodoList = [
    // { id: 0, done: true, title: "점심먹기" },
    // { id: 1, done: false, title: "저녁먹기" },
    // { id: 2, done: false, title: "야식먹기" },
    // { id: 3, done: true, title: "축구보기" },
    //{ id: 4, done: false, title: "리액트 복습하기." },
  ];
  // const [상태를 표시하는 변수,상태를 변경하는 함수] = useState();
  const [todoList, setTodoList] = useState(initTodoList);
  const [count, setCount] = useState(0);
  // count 값을 useState로 만들어 보기...
  const insertTodoItem = (_title) => {
    setCount(count + 1);
    setTodoList([...todoList, { id: count, done: false, title: _title }]);
  };
  let todoTxt = "";
  return (
    // props는 properties
    // <input type="text">
    // <img src="이미지 경로" alt="jfkdjsfd">
    <>
      <Header title="TODO-APP" />
      <TodoInsert insertTodoItem={insertTodoItem} todoTxt={todoTxt} />
      <TodoList todos={todoList} title="안녕" msg="메세지" />
      <Footer />
    </>
  );
}
export default TodoMain;
