import "./App.css";
import "./css/layout.css";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;

