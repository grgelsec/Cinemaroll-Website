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
    <div className="m-10">
      <div className="flex justify-start text-white text-7xl font-semibold m-10">
        Review trending movies...
      </div>
      <div className="flex justify-center">
        <div className="flex items-center justify-end w-full h-[70vh]">
          <div className="flex col flex-wrap">
            <div className="flex m-5 bg-black h-[20vh] w-[20vw] rounded-3xl">
              <img
                className="flex justify-end items-center object-contain h-40 w-20
                rounded-3xl m-5"
                src={images[3]}
              ></img>
              <h1 className=" text-white font-semibold">Oppenheimer</h1>
              <p className="flex items-center justify-center text-white font-semibold text-sm">
                Engaging and Intense. Truly a advancement in film making.
              </p>
            </div>
            <div className="flex items-start justify-start m-5 bg-black h-[20vh] w-[20vw] rounded-3xl"></div>
            <div className="flex items-start justify-start m-5 bg-black h-[20vh] w-[20vw] rounded-3xl"></div>
            <div className="flex items-start justify-start m-5 bg-black h-[20vh] w-[20vw] rounded-3xl"></div>
          </div>
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
          <div className="flex items-center justify-center h-[85vh] w-[45vw] rounded-3xl bg-gradient-to-tl from-black mb-20 mr-20">
            <img
              className="flex object-contain h-[80vh] w-[50vw] rounded-3xl"
              src={images[index]}
            ></img>
          </div>
          <button
            className="flex w-10 h-10 rounded-3xl bg-black hover:bg-red-600 items-center justify-center"
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
  );
}
