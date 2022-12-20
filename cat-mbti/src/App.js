import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/question" element={<Question></Question>} />
          <Route path="/result" element={<Result></Result>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

