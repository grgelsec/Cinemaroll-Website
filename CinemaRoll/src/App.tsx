import NavBar from "./navbar";
//import Options from "./showcase";
import BoxOffice from "./slideshow";
import Welcome from "./welcome";
import { barbie, dune, koffm, oppie, wonka } from "./MovieImages";
import { useScroll, animated } from "@react-spring/web";
import CreateLists from "./createList";

const movies = [barbie, dune, koffm, oppie, wonka];

function App() {
  const { scrollYProgress } = useScroll();

  const boxOfficeOpacity = scrollYProgress.to([0.25, 0.5], [0, 1]);
  const createListsOpacity = scrollYProgress.to([0.5, 1], [0, 1]);

  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <animated.div style={{ opacity: boxOfficeOpacity }}>
        <BoxOffice images={movies}></BoxOffice>
      </animated.div>
      <animated.div style={{ opacity: createListsOpacity }}>
        <CreateLists></CreateLists>
      </animated.div>
    </div>
  );
}

export default App;
