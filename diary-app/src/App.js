import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";

function App() {
  const dummy = [
    { id: 1, author: "홍길동", contents: "눈이 옵니다. 집에 어떻게 가나요?", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "정형돈", contents: "GD야 요즘 어떻게 지내니?", emotion: 3, date: new Date().getTime() },
    { id: 3, author: "유재석", contents: "자기야 깝치지 좀 마", emotion: 5, date: new Date().getTime() },
    { id: 4, author: "지석진", contents: "유투브 만들어야지", emotion: 4, date: new Date().getTime() },
  ];
  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      <DiaryList diaryList={dummy}></DiaryList>
    </div>
  );
}

export default App;

