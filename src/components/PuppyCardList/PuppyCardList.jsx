import React from "react";
import PuppyCard from "../PuppyCard/PuppyCard";
import "./PuppyCardList.css";

function PuppyCardList({ players, playersToShow }) {
  return (
    <div className="puppy-list">
      {players.map((player) => (
        <PuppyCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default PuppyCardList;
