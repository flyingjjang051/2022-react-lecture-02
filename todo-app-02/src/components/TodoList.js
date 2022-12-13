import React from "react";
import TodoItem from "./TodoItem";

// 구조 분해 할당
function TodoList({ todoList, deleteTodoItem, modifyTodoItem }) {
  //deleteTodoItem(1);
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => (
        <TodoItem title={item.title} done={item.done} key={item.id} deleteTodoItem={deleteTodoItem} modifyTodoItem={modifyTodoItem} id={item.id}></TodoItem>
      ))}
    </ul>
  );
}
export default TodoList;
