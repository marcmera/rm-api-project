import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
