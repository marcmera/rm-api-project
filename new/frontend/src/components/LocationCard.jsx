export default function LocationCard({ location }) {
  
    return (
      <div className="bg-gray-200 m-5 p-5 hover:bg-gray-400 hover:cursor-pointer hover:scale-105 rounded-lg flex flex-col justify-between items-center">
        <div>
            <h1>{location.name}</h1>
            <h2>{location.type}</h2>
            <h3>{location.dimension}</h3>
        </div>
      </div>
    );
  }
  