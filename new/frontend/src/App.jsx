import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import { Navigation } from "./components/Navigation";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";
import { Home } from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Rick&Morty" element={<Home />}></Route>
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
