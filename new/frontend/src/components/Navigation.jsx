import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-20 bg-gray-200 flex justify-evenly items-center text-3xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters/page/1">Characters</NavLink>
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="/location">Locations</NavLink>
    </nav>
  );
}