import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";

export function CharacterPage() {
  return (
    <div>
      <Header title="Characters" />
      <CharactersList />
    </div>
  );
}
