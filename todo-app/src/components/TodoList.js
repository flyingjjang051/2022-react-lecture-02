import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <ul>
      <TodoItem title="점심먹기"></TodoItem>
      <TodoItem title="집에가서 공부하기"></TodoItem>
      <TodoItem title="샤워하기"></TodoItem>
    </ul>
  );
}
export default TodoList;
