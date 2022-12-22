import { useState, useRef, useMemo } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryInfo from "./components/DiaryInfo";
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
    const newDiaryItem = { id: ++dataId.current, author: author, contents: contents, emotion: emotion, date: new Date().getTime() };
    setDiaryListArray([newDiaryItem, ...diaryListArray]);
  };
  const deleteDiary = (id) => {
    //console.log(id + "   deleteDiary");
    const newDiaryList = diaryListArray.filter((item, idx) => item.id !== id);
    setDiaryListArray(newDiaryList);
  };
  //고유 번호에 있는 걸 찾아서 내용을 바꿔야 한다.
  const modifyDiary = (id, localContents) => {
    const modifiedDiaryListArray = diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item));
    setDiaryListArray(modifiedDiaryListArray);
    //setDiaryListArray(diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item)));
  };

  // const editDiary = (id, localContents) => {
  //   console.log(localContents);
  //   const editDiaryList = diaryListArray.map((item, idx) => (item.id === id ? { ...item, contents: localContents } : item));
  //   setDiaryListArray(editDiaryList);
  // };
  // 리액트에서 중요한거 중에 하나 리렌더링
  // memoizaion  연산을 기억해 두는 거  연산값을 메모리에 저장해뒀다가 바뀔때만 다시 연산
  const diaryAnalysis = useMemo(() => {
    console.log("일기 분석을 시작합니다.");
    const total = diaryListArray.length;
    const good = diaryListArray.filter((item, idx) => item.emotion >= 3).length;
    const bad = total - good;
    const percent = (good / total) * 100;
    //return { total: total, good: good, bad: bad, percent: percent };
    return { total, good, bad, percent };
  }, [diaryListArray.length]);
  //console.log(diaryAnalysis());
  const { good, bad, total, percent } = diaryAnalysis;
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <DiaryEditor insertDiary={insertDiary}></DiaryEditor>
      <DiaryInfo good={good} bad={bad} total={total} percent={percent}></DiaryInfo>
      <DiaryList diaryList={diaryListArray} deleteDiary={deleteDiary} modifyDiary={modifyDiary}></DiaryList>
    </div>
  );
}

export default App;

