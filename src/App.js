import "./App.scss";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
