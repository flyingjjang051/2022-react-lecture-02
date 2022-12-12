import Footer from "./Footer";
import Header from "./Header";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function TodoMain() {
  // 리액트에서 제일 힘든거 데이터 전다하기가 힘들다. 그래서 나온게 redux이다.
  const todoList = [
    { id: 0, done: true, title: "점심먹기" },
    { id: 1, done: false, title: "저녁먹기" },
    { id: 2, done: false, title: "야식먹기" },
    { id: 3, done: true, title: "축구보기" },
    { id: 4, done: false, title: "리액트 복습하기." },
  ];
  return (
    <>
      <Header />
      <TodoInsert />
      <TodoList todos={todoList} title="안녕" msg="메세지" />
      <Footer />
    </>
  );
}
export default TodoMain;
