//state 정의
const initState = {
  count: 0,
  todoList: [],
};

//actions / action type 정의
export const ACTIONS_TYPE = {
  INSERT_TODO: "insertTodo",
  MODIFY_TODO: "modifyTodo",
  DELETE_TODO: "deleteTodo",
};

// action creator
export const insertTodo = (todoItem) => {
  return {
    type: ACTIONS_TYPE.INSERT_TODO,
    payload: todoItem,
  };
};
export const deleteTodo = (id) => {
  return {
    type: ACTIONS_TYPE.DELETE_TODO,
    payload: id,
  };
};
export const modifyTodo = (id) => {
  return {
    type: ACTIONS_TYPE.MODIFY_TODO,
    payload: id,
  };
};

//reducer
function reducer(state = initState, action) {
  switch (action.type) {
    case ACTIONS_TYPE.INSERT_TODO:
      //useDispatch(insertTodo)해야할 일 적는 곳...
      //action.payload;
      const newTodoList = [action.payload, ...state.todoList];
      return {
        count: state.count + 1,
        todoList: newTodoList,
      };
    case ACTIONS_TYPE.DELETE_TODO:
      //useDispatch(deleteTodo)해야할 일 적는 곳...
      const id = action.payload;
      console.log(action.payload);
      const deleteTodoList = state.todoList.filter((item, idx) => item.id !== id);
      return {
        count: state.count - 1,
        todoList: deleteTodoList,
      };
    case ACTIONS_TYPE.MODIFY_TODO:
      //useDispatch(deleteTodo)해야할 일 적는 곳...
      const modifyId = action.payload;
      const modifiedTodoList = state.todoList.map((item, idx) => (item.id === modifyId ? { ...item, done: !item.done } : item));
      console.log(modifiedTodoList);
      return {
        count: state.count,
        todoList: modifiedTodoList,
      };

    default:
      return {
        count: state.count,
        todoList: state.todoList,
      };
  }
}
export default reducer;
