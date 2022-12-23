import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function TodoMain() {
  const initTodoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  const [todoList, setTodoList] = useState(initTodoList);
  const [count, setCount] = useState(todoList.length);

  const insertTodoItem = (_title) => {
    setCount(count + 1);
    setTodoList([...todoList, { id: count, done: false, title: _title }]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, { id: count, done: false, title: _title }]));
  };

  const modifyTodoList = (id) => {
    const newTodoList = todoList.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done; // true,false
      }
      return item;
    });

    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const deleteTodoList = (id) => {
    const newTodoList = todoList.filter((item, idx) => {
      return item.id !== id;
    });
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  return (
    <>
      <Header title="TODO-APP" />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todos={todoList} modifyTodoList={modifyTodoList} deleteTodoList={deleteTodoList} />
      <Footer />
    </>
  );
}
export default TodoMain;
