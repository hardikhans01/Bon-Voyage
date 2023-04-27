import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Destinations from "../components/Destinations";
import Footer from "../components/footer/Footer";
import GalleryComponent from "../components/gallery/GalleryComponent";
import Header from "../components/Header";
import SearchBar from "./Searchbar";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";
import Nav from "../components/Nav";
import Toggle from "../components/Toggle";

const HomePage = (props) => {
  //! State
  const [state] = useState({
    heading: "Travelling Website",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //! Function

  //! Render
  return (
    <>
      <Toggle />
      <Nav />
      <Helmet>
        <title>Bon Voyage</title>
        <meta
          name="description"
          content="Travel to the world with bon voyage"
        />
        <meta name="keywords" content="travel, travel tours, airline" />
      </Helmet>

      <Header heading={state.heading}>
        <div className="header__contents__text__child__link">
          <SearchBar />
        </div>
      </Header>

      <Destinations />
      <Services />
      <Reviews />
      <GalleryComponent />
      <Footer />
    </>
  );
};

export default HomePage;
