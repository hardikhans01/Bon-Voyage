import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/page-parts/ContactForm";
import PageContainer from "../components/page-parts/PageContainer";
import Nav from "../components/Nav";
import Toggle from "../components/Toggle";

const Contact = (props) => {
  //! State
  const [state] = useState({
    heading: "Contact Us",
    pageHeading: "World best travel agency company",
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
        <title>Contact Us</title>
        <meta name="description" content="travell contact page" />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
};

export default Contact;
