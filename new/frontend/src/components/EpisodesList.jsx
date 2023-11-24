import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import { getEpisodes } from "../api/rm.api";
import EpisodeCard from "./EpisodeCard";

export function EpisodesList() {
  const { page } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function loadEpisodes() {
      const res = await getEpisodes(page);
      setEpisodes(res.results);
      setMaxPage(res.info.pages);
      console.log(res);
    }
    loadEpisodes();
  }, [page]);
  return (
    <main>
      <section className="grid md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-1 gap-3 ">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
          />
        ))}
      </section>
      <section className="grid grid-cols-2 place-items-center">
        <Pagination
          url="episodes"
          page= {parseInt(page, 10)}
          maxPage={maxPage}
        />
      </section>
    </main>
  );
}