import axios from "axios";
import { useState, useRef, useMemo, useEffect } from "react";
import DiaryEditor from "./components/DiaryEditor";
import DiaryInfo from "./components/DiaryInfo";
import DiaryList from "./components/DiaryList";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  const [diaryListArray, setDiaryListArray] = useState([]);
  useEffect(() => {
    async function loadDiaryList() {
      const diaryList = await axios.get("https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/list");
      setDiaryListArray(diaryList.data);
      console.log(diaryListArray);
    }
    loadDiaryList();
  }, []);
  const dataId = useRef(diaryListArray.length);
  const insertDiary = async (author, contents, emotion) => {
    await axios.post("https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/insert", { author, contents, emotion, date: new Date().getTime() });
    const diaryList = await axios.get("https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/list");
    setDiaryListArray(diaryList.data);
  };
  const deleteDiary = async (id) => {
    await axios.delete(`https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/delete/${id}`);
    const diaryList = await axios.get("https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/list");
    setDiaryListArray(diaryList.data);
  };
  //고유 번호에 있는 걸 찾아서 내용을 바꿔야 한다.
  const modifyDiary = async (id, localContents) => {
    await axios.put(`https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/modify/${id}`, { contents: localContents });
    const diaryList = await axios.get("https://port-0-diary-app-server-ll32glc5nqfpj.gksl2.cloudtype.app/diary/list");
    setDiaryListArray(diaryList.data);
  };

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

