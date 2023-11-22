import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";

export function CharacterPage() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div>
      <Header title="Characters" />
      <CharactersList />
    </div>
  );
}