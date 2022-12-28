import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import MainContents from "./components/MainContents";
import VideoBox from "./components/VideoBox";
import { useState } from "react";
//함수형 컴퍼넌트
function App() {
  const [view, setView] = useState(true);
  const viewChange = (isView) => {
    setView(isView);
  };
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <MainVisual></MainVisual>
      <MainContents></MainContents>
      {view && <VideoBox viewChange={viewChange}></VideoBox>}
      <Footer></Footer>
    </div>
  );
}

export default App;

