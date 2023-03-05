import "./App.css";
import AppNavbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "./components/cardList/cardList";
import Table from "./components/table/table";
import Login from "./components/login/login";

function App() {
  return (
    <div className="">
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/card-list" element={<CardList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
