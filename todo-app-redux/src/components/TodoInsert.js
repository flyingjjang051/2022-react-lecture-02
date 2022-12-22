import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertTodo } from "../store/todo";
function TodoInsert() {
  const todoInput = useRef();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="todo-insert">
      <input
        type="text"
        placeholder="해야할 일을 입력하세요."
        ref={todoInput}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(insertTodo({ id: count + 1, title: title, done: false }));
          todoInput.current.value = "";
          todoInput.current.focus();
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export function test() {
  console.log("test");
}
export const num = 10;
export default TodoInsert;
