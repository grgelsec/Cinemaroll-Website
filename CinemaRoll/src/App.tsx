import NavBar from "./navbar";
import Options from "./showcase";
import BoxOffice from "./slideshow";
import Welcome from "./welcome";
import barbie from "./MovieImages/barbie.jpg";
import dune from "./MovieImages/dune.jpg";
import koffm from "./MovieImages/koffm.jpg";
import oppie from "./MovieImages/oppie.jpg";
import wonka from "./MovieImages/wonka.jpg";

const movies = [barbie, dune, koffm, oppie, wonka];

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <BoxOffice images={movies} />
      <Options></Options>
    </div>
  );
}

export default App;
