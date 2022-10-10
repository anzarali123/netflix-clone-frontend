import { Routes, Route } from "react-router-dom";
import Netflix from "./routes/Homepage/Netflix.route";
import Player from "./routes/Player/Player.route";
import SignIn from "./routes/Signin/sign-in.route";
import Signup from "./routes/Signup/sign-up.route";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="signin" element={<SignIn />} />
      <Route exact path="player" element={<Player />} />
      <Route exact path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
