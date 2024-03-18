import {
  bladerunner,
  Inception,
  LaLaLand,
  batman,
  parasite,
  pulp,
  gwh,
  rotk,
  shaw,
  spirited,
  totoro,
  bath,
} from "./ListImages";
import "./listStyle.css";
//const favs = [bladerunner, Inception, LaLaLand];
/*
 <div className="flex flex-wrap justify-center items-center w-full p-4"> 
 wrap helps the boxes be responsive
 <div className="flex flex-col flex-wrap items-center h-96 w-full rounded-xl bg-black">
 column in this line allows for stuff inside of the box to stack vertically
*/

export default function CreateLists() {
  return (
    <div className="h-screen overflow-auto">
      <div className="flex flex-col">
        <div className="flex justify-center text-white text-7xl font-semibold m-10">
          <h1>Create and share lists...</h1>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-center items-center w-full mt-20">
            <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-2">
              <div className="flex flex-col flex-wrap items-center h-96 w-full rounded-xl bg-gradient-to-tr from-black">
                <h1 className="flex text-white text-xl font-bold">
                  Your Favorites
                </h1>
                <div className="flex flex-row flex-wrap mt-20 m-3">
                  <img
                    src={bladerunner}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={Inception}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={LaLaLand}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-2">
              <div className="flex flex-col flex-wrap items-center h-96 w-full rounded-xl bg-gradient-to-t from-black">
                <h1 className="text-white text-xl font-bold">Must see</h1>
                <div className="flex flex-row flex-wrap mt-20 m-3">
                  <img
                    src={batman}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={parasite}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={pulp}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-2">
              <div className="flex flex-col flex-wrap items-center h-96 w-full rounded-xl bg-gradient-to-t from-black">
                <h1 className="text-white text-xl font-bold">Classics</h1>
                <div className="flex flex-row flex-wrap mt-20 m-3">
                  <img
                    src={gwh}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={rotk}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={shaw}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full lg:w-1/4 md:w-1/2 sm:w-full p-2">
              <div className="flex flex-col flex-wrap items-center h-96 w-full rounded-xl bg-gradient-to-tl from-black">
                <h1 className="text-white text-xl font-bold">
                  Ghibli Collection
                </h1>
                <div className="flex flex-row flex-wrap mt-20 m-3">
                  <img
                    src={bath}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={totoro}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                  <img
                    src={spirited}
                    className="flex object-contain w-full max-w-xs lg:w-1/3 md:w-1/3 sm:w-1/6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-40">
            <div className="flex lg:w-1/2 md:w-1/4 sm:w-full">
              <p className="text-center text-white text-2xl font-bold">
                Lists are a great way for audiances to interact by creatings
                lists of various genres. Lists help audiances find new movies,
                series, and genres to expand their movie taste and grow their
                watchlist!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
