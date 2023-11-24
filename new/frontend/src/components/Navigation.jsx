import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-20 w-full bg-gray-200 flex justify-evenly items-center text-3xl sticky">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters/page/1">Characters</NavLink>
      <NavLink to="/episodes/page/1">Episodes</NavLink>
      <NavLink to="/locations/page/1">Locations</NavLink>
    </nav>
  );
}