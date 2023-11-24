import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { getLocations } from "../api/rm.api";
import { LocationCard } from "./LocationCard";

export function LocationsList() {
  const { page } = useParams();
  const [locations, setLocations] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function loadLocations() {
      const res = await getLocations(page);
      setLocations(res.results);
      setMaxPage(res.info.pages);
    }
    loadLocations();
  }, [page]);
  return (
    <main>
      <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 ">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
          />
        ))}
      </section>
      <section className="grid grid-cols-2 place-items-center">
        <Pagination
          url="location"
          page= {parseInt(page, 10)}
          maxPage={maxPage}
        />
      </section>
    </main>
  );
}