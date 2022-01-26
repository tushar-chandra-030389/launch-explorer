export default function Loader() {
  return (
    <div className=" absolute z-40 h-full w-full flex justify-center items-center bg-zinc-500/20">
      <div className="w-16 h-16 animate-bounce">
        <img src={process.env.PUBLIC_URL + "/rocket.png"} alt="" />
      </div>
    </div>
  );
}
