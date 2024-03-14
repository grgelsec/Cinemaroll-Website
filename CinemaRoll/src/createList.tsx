//import { bath, totoro, spirited } from "./ListImages";
//import { batman, parasite, pulp } from "./ListImages";
//import { gwh, rotk, shaw } from "./ListImages";
import { bladerunner, Inception, LaLaLand } from "./ListImages";
import "./listStyle.css";
//const favs = [bladerunner, Inception, LaLaLand];

export default function CreateLists() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex justify-end text-white text-7xl font-semibold m-10">
        <h1>Create and share lists...</h1>
      </div>
      <div className="">
        <div className="flex flex-wrap justify-center items-center w-full p-4">
          <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-4">
            <div className="h-96 w-full rounded-xl bg-black flex justify-center">
              <h1 className="flex text-white text-xl font-bold">Your Favorites</h1>
              <img
                src={bladerunner}
                alt="Stacked image 1"
                className="flex object-contain w-full lg:1/4 md:w-1/3 sm:w-1/4"
                style={{ zIndex: 3 }} // Highest in the stack
              />
              <img
                src={Inception}
                alt="Stacked image 2"
                className="flex object-contain w-full lg:1/4 md:w-1/3 sm:w-1/4"
                style={{ zIndex: 2 }} // Middle in the stack
              />
              <img
                src={LaLaLand}
                alt="Stacked image 3"
                className="flex object-contain w-full lg:1/4 md:w-1/3 sm:w-1/4"
                style={{ zIndex: 1 }} // Bottom in the stack
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-4">
            <div className="h-96 w-full rounded-xl bg-black flex justify-center items-start">
              <h1 className="text-white text-xl font-bold">Must see</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-4">
            <div className="h-96 w-full rounded-xl bg-black flex justify-center items-start">
              <h1 className="text-white text-xl font-bold">Must see</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-4">
            <div className="h-96 w-full rounded-xl bg-black flex justify-center items-start">
              <h1 className="text-white text-xl font-bold">Must see</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
