import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Detail from "./components/Detail";
import ProfileDetail from "./components/ProfileDetail";
import NotFound from "./components/NotFound";
import SearchResult from "./components/SearchResult";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          <Route path="/profile/:id" element={<ProfileDetail></ProfileDetail>}></Route>
          <Route path="/search" element={<SearchResult></SearchResult>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

