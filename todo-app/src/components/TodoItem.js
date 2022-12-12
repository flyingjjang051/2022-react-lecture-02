import React from "react";

function TodoItem(props) {
  return (
    <li>
      <div className={`${props.done ? "done" : ""} item`}>
        {/* <input type="checkbox" checked={props.done} /> */}
        <input type="checkbox" defaultChecked={props.done} />
        <p>{props.title}</p>
        <div className="btns">
          <button className="btn-edit">
            <i className="fa-solid fa-pen"></i>
          </button>
          <button className="btn-del">
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
export default TodoItem;
