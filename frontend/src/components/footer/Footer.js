import React from "react";

const Footer = (props) => {
  //! State
  const footerStyles = {
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };
  //! Function

  //! Render
  return (
    <footer className="footer" style={footerStyles}>
      <div className="footer__container">
          <div className="footer__bottom">
            <p>&copy; copy right Harsh Jain , Hardik Hans and Rishabh Sinha {new Date().getFullYear()}</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
