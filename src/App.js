import Header from "./components/header/header.component";
import FilterBar from "./components/filterbar/filterbar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginWhatsapp from "./components/whatsapplogin/loginw";
import RedirectWhatsapp from "./components/whatsapplogin/redirectw";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/loginwhatsapp" element={<LoginWhatsapp />}></Route>
          <Route
            path="/loginwhatsapp/redirect"
            element={<RedirectWhatsapp />}
          ></Route>

          <div>
            <Header />
            <div className="App">
              <FilterBar />
            </div>
          </div>
        </Routes>
      </Router>
    </>
  );
}

export default App;
