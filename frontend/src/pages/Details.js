import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import DestinationsContext from "../context/DestinationsContext";
import { CITIES, DETAILS } from "../context/types/DestinationTypes";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";
import SearchBar from "./Searchbar";
import DestinationsInfo from "../components/DestinationsInfo";
import Toggle from "../components/Toggle";
import Nav from "../components/Nav";

const Details = (props) => {
  //! State
  const { id } = useParams();

  const { destinationsData, dispatch } = useContext(DestinationsContext);

  const { details, filteredCities } = destinationsData;
  console.log(filteredCities);
  useEffect(() => {
    dispatch({ type: DETAILS, payload: id });
    dispatch({ type: CITIES, payload: id });
    window.scrollTo(0, 0);
  }, [id]);
  //! Function

  //! Render
  return (
    <>
      <Toggle />
      <Nav />
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header heading={details.name} image={details.bigImage}>
        <div className="header__contents__text__child__link">
          <SearchBar />
        </div>
      </Header>
      <DestinationsInfo details={details} />
    </>
  );
};

export default Details;
