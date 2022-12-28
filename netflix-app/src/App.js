import "./App.css";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
//함수형 컴퍼넌트
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <MainVisual></MainVisual>
      <Footer></Footer>
    </div>
  );
}

export default App;

