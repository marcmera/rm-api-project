export default function CharactersCard({ character, colors }) {
  
  return (
    <article className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-lg flex flex-col justify-between items-center">
      <div className="flex flex-wrap">
        <h3 className="character-card text-3xl" style={{color: `#${colors[character.id - 1]}`}}>{character.name} </h3>
      </div>
      <div className="mb-4">
        <img
          src={character.image}
          alt={character.name}
        />
      </div>
    </article>
  );
}
