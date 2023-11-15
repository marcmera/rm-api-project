export function Home() {
  return (
    <div className="home-page">
      <img
        className="w-full h-full position-absolute opacity-80"
        src="https://c4.wallpaperflare.com/wallpaper/365/629/82/rick-morty-rick-and-morty-cartoons-wallpaper-preview.jpg"
        alt="home-img"
      />
      <h1 className="text-8xl pt-40 absolute">
        <span className="text-cyan-500">Rick</span>
        <span className="text-green-300"> and </span>
        <span className="text-yellow-300">Morty</span>
      </h1>
    </div>
  );
}
