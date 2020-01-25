import React from "react";

const PlayerCard = props => {
  return (
    <React.Fragment>
      <div>
        <h3>{`Player Name: ${props.name}`}</h3>
        <p>{`Country: ${props.country}`}</p>
        <p>{`Searches: ${props.searches}`}</p>
      </div>
    </React.Fragment>
  );
};

export default PlayerCard;
