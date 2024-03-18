import NavBar from "./navbar";
//import Options from "./showcase";
import BoxOffice from "./slideshow";
import Welcome from "./welcome";
import { barbie, dune, koffm, oppie, wonka } from "./MovieImages";
import { useScroll, animated } from "@react-spring/web";
import CreateLists from "./createList";
import ShareHotTakes from "./shareHotTakes";

const movies = [barbie, dune, koffm, oppie, wonka];

function App() {
  const { scrollYProgress } = useScroll();

  const boxOfficeOpacity = scrollYProgress.to([0.25, 0.5], [0, 3]);
  const createListsOpacity = scrollYProgress.to([0.5, 1], [0, 3]);
  const shareHotTakesOpacity = scrollYProgress.to([0.75, 1], [0, 3]);

  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <a href="#boxOffice">
        <animated.div style={{ opacity: boxOfficeOpacity }}>
          <BoxOffice images={movies}></BoxOffice>
        </animated.div>
      </a>
      <animated.div style={{ opacity: createListsOpacity }}>
        <CreateLists></CreateLists>
      </animated.div>
      <animated.div style={{ opacity: shareHotTakesOpacity }}>
        <ShareHotTakes></ShareHotTakes>
      </animated.div>
    </div>
  );
}

export default App;
