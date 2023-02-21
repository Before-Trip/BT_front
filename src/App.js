import "./App.css";
import { Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries/Countries";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />}></Route>
      </Routes>
    </div>
  );
}

export default App;
