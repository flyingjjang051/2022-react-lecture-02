import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, modifyTodo } from "../store/todo";
function TodoItem({ done, title, id }) {
  const dispatch = useDispatch();
  return (
    <li>
      <div className={`${done ? "done" : ""} item`}>
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={() => {
            dispatch(modifyTodo(id));
          }}
        />
        <p>{title}</p>
        <div className="btns">
          <button
            className="btn-del"
            onClick={() => {
              dispatch(deleteTodo(id));
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
