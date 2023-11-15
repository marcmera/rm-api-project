import img from "../assets/home-img.png";

export function Home() {
  return (
    <div className="home-page">
      <img
        className="w-full h-full position-absolute opacity-90"
        src={img}
        alt="home-img"
      />
    </div>
  );
}
