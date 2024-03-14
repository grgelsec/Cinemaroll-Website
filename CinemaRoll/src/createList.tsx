import { bath, totoro, spirited } from "./ListImages"
import { batman, parasite, pulp } from "./ListImages"
import { gwh, rotk, shaw } from "./ListImages"
import { bladerunner, Inception, LaLaLand } from "./ListImages";
import "./listStyle.css";
//const favs = [bladerunner, Inception, LaLaLand];

export default function CreateLists() {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex flex-shrink-0 text-white text-7xl font-semibold m-10">
        <h1 className="m-5">Create and share lists...</h1>
      </div>
      <div className="flex justify-center items-center row gap-x-3 m-3 mb-20">
        <div className="flex relative object-contain h-[55vh] w-[24vw] rounded-xl bg-gradient-to-tr from-black">
        <h1 className="flex text-white text-xl font-bold ml-40 mt-5">Your Favorites</h1>
          <img
            src={bladerunner}
            alt="Stacked image 1"
            className="flex absolute object-contain top-60 left-20 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 3 }} // Highest in the stack
          />
          <img
            src={Inception}
            alt="Stacked image 2"
            className="absolute object-contain top-40 right-10 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 2 }} // Middle in the stack
          />
          <img
            src={LaLaLand}
            alt="Stacked image 3"
            className="absolute object-contain top-20 right-40 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 1 }} // Bottom in the stack
          />
        </div>
        <div className="flex relative object-contain h-[55vh] w-[24vw] rounded-xl bg-gradient-to-t from-black">
        <h1 className="flex text-white text-xl font-bold ml-40 mt-5">Must see</h1>
          <img
            src={batman}
            alt="Stacked image 1"
            className="flex absolute object-contain top-60 left-20 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 3 }} // Highest in the stack
          />
          <img
            src={parasite}
            alt="Stacked image 2"
            className="absolute object-contain top-40 right-10 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 2 }} // Middle in the stack
          />
          <img
            src={pulp}
            alt="Stacked image 3"
            className="absolute object-contain top-20 right-40 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 1 }} // Bottom in the stack
          />
        </div>
        <div className="flex relative object-contain h-[55vh] w-[24vw] rounded-xl bg-gradient-to-t from-black">
        <h1 className="flex text-white text-xl font-bold ml-40 mt-5">Classics</h1>
          <img
            src={gwh}
            alt="Stacked image 1"
            className="flex absolute object-contain top-60 left-20 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 3 }} // Highest in the stack
          />
          <img
            src={rotk}
            alt="Stacked image 2"
            className="absolute object-contain top-40 right-10 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 2 }} // Middle in the stack
          />
          <img
            src={shaw}
            alt="Stacked image 3"
            className="absolute object-contain top-20 right-40 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 1 }} // Bottom in the stack
          />
        </div>
        <div className="flex relative object-contain h-[55vh] w-[24vw] rounded-xl bg-gradient-to-tl from-black">
        <h1 className="flex text-white text-xl font-bold ml-40 mt-5">Ghibli Collection</h1>
          <img
            src={bath}
            alt="Stacked image 1"
            className="flex absolute object-contain top-60 left-20 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 3 }} // Highest in the stack
          />
          <img
            src={totoro}
            alt="Stacked image 2"
            className="absolute object-contain top-40 right-10 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 2 }} // Middle in the stack
          />
          <img
            src={spirited}
            alt="Stacked image 3"
            className="absolute object-contain top-20 right-40 transform w-[30vw] h-[30vh] rotate-y-scale-x origin-right"
            style={{ zIndex: 1 }} // Bottom in the stack
          />
        </div>
      </div>
    </div>
  );
}
