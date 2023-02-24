import "./App.css";
import { Route, Routes } from "react-router-dom";
import Countries from "./pages/Countries/Countries";
import Community from "./pages/Community/Community";
import { countryList } from "./util/countyList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
    </div>
  );
}

export default App;
