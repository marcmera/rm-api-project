import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-20 bg-gray-300 flex justify-evenly items-center text-3xl">
      <NavLink to="/Rick&Morty">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </nav>
  );
}
