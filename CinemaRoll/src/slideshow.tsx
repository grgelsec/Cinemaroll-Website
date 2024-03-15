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
    <div className="h-screen w-screen overflow-scroll">
      <div className="flex flex-wrap h-screen">
        <div className="flex flex-shrink-0 text-white text-7xl font-semibold">
          <h1 className="mt-10 ml-10">Review trending movies...</h1>
        </div>
        <div className="flex items-center">
          <div className="flex items-center col flex-wrap ml-10 overflow-hidden">
            <div className="flex m-5 bg-black lg:h-[20vh] lg:w-[30vw] rounded-lg"></div>
            <div className="m-5 bg-black h-[20vh] w-[30vw] rounded-lg"></div>
            <div className="m-5 bg-black h-[20vh] w-[30vw] rounded-lg"></div>
          </div>
          <div className="flex static items-center justify-center max-height max-width rounded-3xl bg-gradient-to-tl from-black mb-60 mr-40 overflow-hidden">
            <button
              className="flex w-10 h-10 bg-black rounded-3xl hover:bg-red-600 items-center justify-center m-2"
              onClick={previousImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <img
              className="flex object-contain justify-center h-[60vh] w-[40vw] rounded-3xl"
              src={images[index]}
            ></img>
            <button
              className="flex w-10 h-10 rounded-3xl bg-black hover:bg-red-600 items-center justify-center m-2"
              onClick={nextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
