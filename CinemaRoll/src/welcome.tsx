export default function Welcome() {
  return (
    <div className="h-screen w-screen overflow-scroll">
      <div className="relative flex flex-col justify-center">
        <h1 className="text-white text-8xl font-semibold flex w-scren h-screen items-center justify-center">
          Welcome to Cinemaroll
          <div className="absolute bottom-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </h1>
      </div>
    </div>
  );
}
