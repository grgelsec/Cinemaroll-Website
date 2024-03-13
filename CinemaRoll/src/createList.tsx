import { bladerunner } from "./ListImages";

//const favs = [bladerunner, Inception, LaLaLand];

export default function CreateLists() {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex flex-shrink-0 text-white text-7xl font-semibold m-10">
        <h1 className="m-5">Create and share lists...</h1>
      </div>
      <div className="flex justify-center items-center row flex-wrap ml-10 mb-40">
        <div className="m-2 bg-black h-[50vh] w-[22.5vw] rounded-xl">
          <img
            className="flex items-center justify-center"
            src={bladerunner}
          ></img>
        </div>
        <div className="m-2 bg-black h-[50vh] w-[22.5vw] rounded-xl"></div>
        <div className="m-2 bg-black h-[50vh] w-[22.5vw] rounded-xl"></div>
        <div className="m-2 bg-black h-[50vh] w-[22.5vw] rounded-xl"></div>
      </div>
    </div>
  );
}
