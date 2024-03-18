import { useState } from "react";
//Need database of images
//Need to use state to keep track of image index
//Need a next and previous image function

interface BoxOfficeProps {
  images: string[];
}

export default function BoxOffice({ images }: BoxOfficeProps) {
  //index state to iterate through movies
  const [index, setIndex] = useState(0);

  function nextImage() {
    setIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function previousImage() {
    setIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  //March 6 - buttons work, need to make it look sexy and get the images to relative
  return (
    <div id="boxOffice" className="h-screen overflow-auto">
      <div className="flex flex-shrink-0 text-white text-7xl font-semibold">
        <h1 className="mt-10 ml-10">Review trending movies...</h1>
      </div>
      <div className="flex flex-row gap-x-10 items-center">
        <div className="flex relative flex-col w-full lg:w-1/2 flex-wrap gap-y-10 m-10 overflow-hidden bg-black">
          <div className="flex w-full min-w-xs lg:w-1/2 md:w-1/2 sm:w-full rounded-lg"></div>
          <div className="flex w-full min-w-xs lg:w-1/2 md:w-1/2 sm:w-full rounded-lg"></div>
          <div className="flex w-full min-w-xs lg:w-1/2 md:w-1/2 sm:w-full rounded-lg"></div>
        </div>
        <div className="flex items-center lg:w-1/3 md:w-1/2 sm:w-full rounded-3xl bg-gradient-to-tl from-black overflow-hidden">
          <div className="flex flex-col items-center w-full lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2">
            <button
              className="flex bg-black rounded-xl hover:bg-red-600 items-center m-2"
              onClick={previousImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="w-10 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </button>
            <button
              className="flex rounded-xl bg-black hover:bg-red-600 items-center m-2"
              onClick={nextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                className="w-10 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </div>
          <img
            className="flex object-contain w-full rounded-3xl"
            src={images[index]}
          ></img>
        </div>
      </div>
    </div>
  );
}
