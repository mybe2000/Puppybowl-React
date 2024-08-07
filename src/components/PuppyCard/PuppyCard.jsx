import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./PuppyCard.css";

function PuppyCard({ player, parent }) {
  //   if (player?.imageUrl.trim()) {
  //     player?.imageUrl;
  //   }
  const navigate = useNavigate();
  const cardStyles = {
    width: parent === "details" ? "90%" : "27%",
    margin: parent === "details" ? "0 auto" : null,
  };

  const removePlayer = (id) => {
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/players/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          alert("successfully deleted");
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="player-card" style={cardStyles}>
      <h2>Name: {player?.name}</h2>
      <img src={player?.imageUrl} alt={player?.name} />
      <p>Breed: {player?.breed}</p>
      {parent === "details" && <p>STATUS: {player?.status}</p>}
      {parent === "id" && <p>ID: {player?.id}</p>}
      {parent === "details" ? (
        <button onClick={() => removePlayer(player?.id)}>Remove Player</button>
      ) : (
        <button onClick={() => navigate(`/details/${player?.id}`)}>
          See details
        </button>
      )}
    </div>
  );
}

export default PuppyCard;
