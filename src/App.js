import "./App.css";
import AppNavbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "./components/cardList/cardList";
import Table from "./components/table/table";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/card-list" element={<CardList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
