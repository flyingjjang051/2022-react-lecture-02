import React from "react";

function TodoItem({ done, title, deleteTodoItem, modifyTodoItem, id }) {
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        {/* <input type="checkbox" checked={props.done} /> */}
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={() => {
            modifyTodoItem(id);
          }}
        />
        <p>{title}</p>
        <div className="btns">
          <button className="btn-edit">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn-del"
            onClick={() => {
              deleteTodoItem(id);
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;
