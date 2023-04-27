import React from "react";
const DestinationsDetails = ({ title, text }) => {
  return (
    <div className="destinationsInfo__details">
      <div className="destinationsInfo__details__head animation">{title}</div>
      <div className="destinationsInfo__details__text animation">{text}</div>
    </div>
  );
};

const DestinationsInfo = ({ details }) => {
  return (
    <div className="destinationsInfo">
      <div className="container">
        <h2 className="heading headingAnimation">OverView</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationsInfo__p headingAnimation">{details.details}</p>
          </div>
        </div>
        <h2 className="heading">Good to know</h2>
        <div className="row">
          <div className="col-8">
              <DestinationsDetails title="Language" text={details.language} />
              <DestinationsDetails title="Currency" text={details.currency} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsInfo;
