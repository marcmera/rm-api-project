import { Header } from "../components/Header";
import { CharactersList } from "../components/CharactersList";
import { Footer } from "../components/Footer";
import { createContext, useReducer } from "react";

const defaultState = {
  page: 1
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export const CharacterContext = createContext({});

export function CharacterPage() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div>
      <CharacterContext.Provider value={{
        state, 
        dispatch
      }}>
        <Header title="Characters" />
        <CharactersList />
        <Footer />
      </CharacterContext.Provider>
    </div>
  );
}