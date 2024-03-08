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
    <div>
      <div className="flex justify-center">
        <div className="flex items-center justify-center w-full h-[70vh]">
          <button
            className="flex w-10 h-10 bg-black rounded-3xl font-semibold hover:bg-orange-500 items-center justify-center m-2"
            onClick={previousImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="orange"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <img
            className="flex object-contain justify-center h-30 w-80 rounded-3xl m-4"
            src={images[index]}
          ></img>
          <button
            className="flex w-10 h-10 bg-black rounded-3xl font-semibold hover:bg-orange-500 items-center justify-center m-2"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="orange"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <div className="flex justify-end flex-col flex-wrap gap-x-4 space-y-10">
            <div className="flex items-center bg-gradient-to-t from-black w-[25vw] rounded-xl">
              <img
                className="flex justify-start object-contain h-40 w-20 rounded-3xl m-2"
                src={images[index + 1]}
              ></img>
            </div>
            <div className="flex items-center bg-gradient-to-t from-black w-[25vw] rounded-xl">
              <img
                className="flex justify-end object-contain h-40 w-20 rounded-3xl m-2"
                src={images[index + 2]}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
