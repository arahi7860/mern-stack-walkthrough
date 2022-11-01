import "./App.css";
import NAV from "./components/NAV.jsx";
import Home from "./screens/Home.jsx";
import Students from "./screens/Students.jsx";
import CreateStudent from "./screens/CreateStudent";
import DetailStudent from "./screens/DetailStudent";
import EditStudent from "./screens/EditStudent";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NAV />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<DetailStudent />} />
        <Route path="/add-student" element={<CreateStudent />} />
        <Route path="/students/:id/edit" element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
