import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharacterPage } from "./pages/CharacterPage";
import { Navigation } from "./components/Navigation";
import { Episodes } from "./pages/EpisodesPage";
import { Locations } from "./pages/LocationsPage";
import { Home } from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters/page/:page" element={<CharacterPage />} />
        <Route path="/episodes/page/:page" element={<Episodes />} />
        <Route path="/locations/page/:page" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
