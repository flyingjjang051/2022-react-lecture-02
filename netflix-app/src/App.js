import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Footer from "./components/Footer";
import Rows from "./components/Rows";
import GlobalStyle from "./components/GlobalStyle";
import requests from "./api/requests";
//함수형 컴퍼넌트
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <MainVisual></MainVisual>
      <Rows title="netflix original" fetchURL={requests.fetchNetflixOriginals} type="banner"></Rows>
      <Rows title="top rated" fetchURL={requests.fetchTopRated} type="banner"></Rows>
      <Rows title="popular movie" fetchURL={requests.fetchPopular} type="banner"></Rows>
      <Footer></Footer>
    </div>
  );
}

export default App;

