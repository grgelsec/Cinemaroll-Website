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

  return (
    <div className="">
      <div className="flex justify-start bg-gray-500 rounded-3xl m-10">
        <img className="object-fit:scale-down rounded-3xl" src={images[index]}></img>
      </div>
      <button className="h-5 bg-white" onClick={previousImage}></button>
      <button className="h-5" onClick={nextImage}></button>
    </div>
  );
}
