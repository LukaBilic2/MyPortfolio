// styles for this card file are in global.css

import React from 'react';

const Card = ({ title, svg, text }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            {svg}
            <strong className="titleCard">{title}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="bottom"></div>
          </div>
          <div className="front-content">
            <small className="badge">
              {text}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
