import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home/Home";
import CoinPage from "./pages/CoinPage/CoinPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/coins/:id" Component={CoinPage} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
