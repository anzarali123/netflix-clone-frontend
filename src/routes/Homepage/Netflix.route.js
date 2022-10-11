import React, { useState } from "react";
import { useContext } from "react";
import { MoviesContext } from "../../Contexts/context";
import Navbar from "../../components/Navbar/Navbar.component";
import { Container } from "./Netflix.styles";
import backgroundHomeImage from "../../assets/home.jpg";
import MovieLogo from "../../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider/Slider.component";

function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const { genres, movies } = useContext(MoviesContext);

  const navigateToPlayer = () => {
    navigate("player");
  };
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={backgroundHomeImage} className="background-image" />
        <div className="container">
          <div className="logo">
            <img src={MovieLogo} />
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={navigateToPlayer}
            >
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </Container>
  );
}

export default Netflix;
