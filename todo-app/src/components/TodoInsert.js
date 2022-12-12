import React from "react";
function TodoInsert() {
  function insertTodo() {
    console.log("할일을 추가했습니다.");
  }
  return (
    <div className="todo-insert">
      <input type="text" />
      <button onClick={insertTodo}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
export default TodoInsert;
