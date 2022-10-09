import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.component";

import Header from "../../components/Header/Header.component";
import { Container } from "./sign-up.styles";
const Signup = () => {
  return (
    <Container>
      <BackgroundImage />
      <Header />
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch Anywhere. Cancel Anytime</h4>
          <h6>Ready to watch? Enter your email to start your membership</h6>
        </div>
        <div className="form"></div>
      </div>
    </Container>
  );
};

export default Signup;
