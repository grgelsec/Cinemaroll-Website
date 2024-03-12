import NavBar from "./navbar";
//import Options from "./showcase";
import BoxOffice from "./slideshow";
import Welcome from "./welcome";
import barbie from "./MovieImages/barbie.jpg";
import dune from "./MovieImages/dune.jpg";
import koffm from "./MovieImages/koffm.jpg";
import oppie from "./MovieImages/oppie.jpg";
import wonka from "./MovieImages/wonka.jpg";
import { useScroll, animated } from "@react-spring/web";

const movies = [barbie, dune, koffm, oppie, wonka];

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <animated.div style={{opacity: scrollYProgress}}>
        <BoxOffice images={movies}></BoxOffice>
      </animated.div>
    </div>
  );
}

export default App