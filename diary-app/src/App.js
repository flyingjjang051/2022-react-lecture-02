import { useState, useRef } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  // react는 state 가 바뀌면 화면을 다시 그린다. 즉 함수를 다시 실행한다. 이때 안에 있는 변수들은 다시 초기화 된다.
  const dummy = [
    { id: 1, author: "홍길동", contents: "눈이 옵니다. 집에 어떻게 가나요?", emotion: 1, date: new Date().getTime() },
    { id: 2, author: "정형돈", contents: "GD야 요즘 어떻게 지내니?", emotion: 3, date: new Date().getTime() },
    { id: 3, author: "유재석", contents: "자기야 깝치지 좀 마", emotion: 5, date: new Date().getTime() },
    { id: 4, author: "지석진", contents: "유투브 만들어야지", emotion: 4, date: new Date().getTime() },
  ];
  const dataId = useRef(4);
  const [diaryListArray, setDiaryListArray] = useState([...dummy]);
  const insertDiary = (author, contents, emotion) => {
    // const newDiaryList = [...diaryListArray];
    // const newDiaryItem = { id: 5, author: "송지효", contents: "졸리다. 졸리다. 졸리우다", emotion: 4, date: new Date().getTime() };
    // newDiaryList.push(newDiaryItem);
    // setDiaryListArray(newDiaryList);
    const newDiaryItem = { id: ++dataId.current, author: author, contents: contents, emotion: emotion, date: new Date().getTime() };
    setDiaryListArray([newDiaryItem, ...diaryListArray]);
  };
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor insertDiary={insertDiary}></DiaryEditor>
      <DiaryList diaryList={diaryListArray}></DiaryList>
    </div>
  );
}

export default App;

