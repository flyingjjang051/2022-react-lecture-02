import React from "react";
import TodoItem from "./TodoItem";

// 구조 분해 할당
function TodoList({ todos, modifyTodoList, deleteTodoList }) {
  //props는 객체다.
  // console.log(todoList);
  // console.log(title);
  // console.log(msg);
  //const { todos, title, msg } = props;
  const todoList = todos;
  return (
    <ul className="todo-list">
      {/* 리액트에서 반복되는걸 뿌릴때는 반드시 key가 필요하다. 안써되 되긴 하지만 성능에 문제가 생긴다. */}
      {todoList.map((item, idx) => (
        <TodoItem title={item.title} done={item.done} key={item.id} id={item.id} modifyTodoList={modifyTodoList} deleteTodoList={deleteTodoList}></TodoItem>
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
