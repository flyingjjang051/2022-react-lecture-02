import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = [
    { id: 0, done: true, title: "점심먹기" },
    { id: 1, done: false, title: "저녁먹기" },
    { id: 2, done: false, title: "야식먹기" },
    { id: 3, done: true, title: "축구보기" },
    { id: 4, done: false, title: "리액트 복습하기." },
  ];
  return (
    <ul className="todo-list">
      {/* 리액트에서 반복되는걸 뿌릴때는 반드시 key가 필요하다. 안써되 되긴 하지만 성능에 문제가 생긴다. */}
      {todoList.map((item, idx) => (
        <TodoItem title={item.title} done={item.done} key={item.id}></TodoItem>
      ))}
      {/* <TodoItem title="점심먹기"></TodoItem>
      <TodoItem title="집에가서 공부하기"></TodoItem>
      <TodoItem title="샤워하기"></TodoItem>
      <TodoItem title="샤워하기"></TodoItem>
      <TodoItem title="샤워하기"></TodoItem>
      <TodoItem title="샤워하기"></TodoItem> */}
    </ul>
  );
}
export default TodoList;
