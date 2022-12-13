import React, { useState } from "react";

import Footer from "./Footer";
import Header from "./Header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function TodoMain() {
  // 리액트에서 제일 힘든거 데이터 전다하기가 힘들다. 그래서 나온게 redux이다.
  // 리액트는 변수를 바꾸는 걸로 화면을 렌더링하지 않는다.
  // 컴퍼넌트
  //const initTodoList = JSON.parse(localStorage.getItem("todoList"));
  const initTodoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : [];
  // const [상태를 표시하는 변수,상태를 변경하는 함수] = useState();
  const [todoList, setTodoList] = useState(initTodoList);
  const [count, setCount] = useState(todoList.length);
  // count 값을 useState로 만들어 보기...
  const insertTodoItem = (_title) => {
    setCount(count + 1);
    setTodoList([...todoList, { id: count, done: false, title: _title }]);
    localStorage.setItem("todoList", JSON.stringify([...todoList, { id: count, done: false, title: _title }]));
  };
  function changeState() {
    console.log("change");
  }
  const testObj = { name: "장성호", age: 20, weight: 80 };
  //const { name, age, weight } = testObj;
  const newObj = { ...testObj };
  newObj.age = 40;
  newObj.name = "장동건";
  console.log(testObj === newObj);

  const modifyTodoList = (id) => {
    //map은 배열의 반복문 (iteration)
    const newTodoList = todoList.map((item, idx) => {
      if (item.id === id) {
        item.done = !item.done; // true,false
      }
      return item;
      //return item.id === id ? { ...item, done: true } : item;
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

  // const fruits = ["kiwi", "apple", "mango"];
  // const selectedFruits = fruits.filter((item, idx) => {
  //   return item !== "apple";
  // });
  // console.log("🚀 ~ file: TodoMain.js:55 ~ selectedFruits ~ selectedFruits", selectedFruits);
  // const newTodoList = todoList.filter((item, idx) => {
  //   return item.id !== 3;
  // });
  // console.log(newTodoList);

  return (
    // props는 properties
    // <input type="text">
    // <img src="이미지 경로" alt="jfkdjsfd">
    <>
      <Header title="TODO-APP" />
      <TodoInsert insertTodoItem={insertTodoItem} />
      <TodoList todos={todoList} modifyTodoList={modifyTodoList} deleteTodoList={deleteTodoList} />
      <Footer />
    </>
  );
}
export default TodoMain;
