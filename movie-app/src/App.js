import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./css/layout.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<List></List>}></Route>
          <Route path="/detail/:id" element={<Detail></Detail>}></Route>
          {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

