import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";
import { Footer } from "../components/Footer";

export function CharacterPage() {
  return (
    <div>
      <Header title="Characters" />
      <CharactersList />
      <Footer />
    </div>
  );
}
