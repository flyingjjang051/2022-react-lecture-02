import { useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import DiaryEditor from "./components/DiaryEditor";
import DiaryInfo from "./components/DiaryInfo";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";

// redux 는 초기 세팅이 조금 어렵다.
function App() {
  const diaryListArray = useSelector((state) => {
    console.log("state===", state);
    return state.diaryListArray;
  });
  const dataId = useRef(4);
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
      <DiaryEditor></DiaryEditor>
      <DiaryInfo good={good} bad={bad} total={total} percent={percent}></DiaryInfo>
      <DiaryList diaryList={diaryListArray}></DiaryList>
    </div>
  );
}

export default App;

