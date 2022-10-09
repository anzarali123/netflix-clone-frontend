import { Routes, Route } from "react-router-dom";
import Netflix from "./routes/Homepage/netflix";
import SignIn from "./routes/Signin/sign-in.routes";
import Signup from "./routes/Signup/sign-up.routes";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
