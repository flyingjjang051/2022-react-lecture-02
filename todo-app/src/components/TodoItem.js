import React from "react";

function TodoItem(props) {
  return (
    <li>
      <p>
        <input type="checkbox" />
        {props.title}{" "}
        <button>
          <i class="fa-solid fa-pen"></i>
        </button>
        <button>
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </p>
    </li>
  );
}
export default TodoItem;
