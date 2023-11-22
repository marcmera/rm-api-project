import { useContext } from "react";
import { CharacterContext } from "../pages/CharacterPage";

export function Footer() {
  const { state, dispatch } = useContext(CharacterContext);

  return (
    <div className="w-full flex justify-around mb-10 -mt-16">
      <button className="btn" onClick={() => dispatch({
        type: "SET_PAGE",
        payload: state.page - 1
      })}>
        Prev
      </button>
      <button className="btn" onClick={() => dispatch({
        type: "SET_PAGE", 
        payload: state.page + 1
      })}>
        Next
      </button>
    </div>
  );
}
