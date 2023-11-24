export default function EpisodeCard({ episode, colors }) {
  
    return (
      <div className="bg-gray-200 m-5 p-5 hover:bg-gray-400 hover:cursor-pointer hover:scale-105 rounded-lg flex flex-col justify-between items-center">
        <div>
            <h1>{episode.name}</h1>
            <h2>{episode.air_date}</h2>
            <h3>{episode.episode}</h3>
        </div>
      </div>
    );
  }
  