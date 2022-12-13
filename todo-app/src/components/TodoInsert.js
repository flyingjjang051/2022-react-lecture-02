import React, { useRef } from "react";
function TodoInsert({ insertTodoItem }) {
  // ref 는 리액트에서 돔(Dom)에 접근할때 쓴다.
  const inputTodo = useRef();
  function transInsertTodoItem() {
    //console.log(inputTodo.current.value);
    insertTodoItem(inputTodo.current.value);
    inputTodo.current.value = "";
    inputTodo.current.focus();
  }
  function keyTransInsertTodoItem(e) {
    if (e.keyCode === 13) {
      transInsertTodoItem();
    }
  }
  return (
    <div className="todo-insert">
      <input type="text" ref={inputTodo} onKeyDown={keyTransInsertTodoItem} />
      <button onClick={transInsertTodoItem}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default TodoInsert;
// Hooks
