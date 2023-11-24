export default function CharactersCard({ character, colors }) {
  
  return (
    <div className="bg-gray-200 m-5 p-5 hover:bg-gray-400 hover:cursor-pointer hover:scale-105 rounded-lg flex flex-col justify-between items-center">
      <div className="flex flex-col w-[100%]">
        {character.status === "Alive" ? (
          <p className="character-card text-xl text-left p-3">🟢 <span>{character.species}</span></p>
          ) : (
            <p className="character-card text-xl text-left p-3">🔴 <span>{character.species}</span></p>
            )}
        <h3 className="character-card text-2xl text-center p-3" style={{color: `#${colors[character.id - 1]}`}}>{character.name} </h3>
      </div>
      <div className="mb-4">
        <img
          src={character.image}
          alt={character.name}
        />
      </div>
    </div>
  );
}
