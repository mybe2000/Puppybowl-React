import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PuppyCard from "../components/PuppyCard/PuppyCard";

function Details() {
  const { id } = { useParams };
  const { player, setPlayer } = useState(null);
  useEffect(() => {
    axios(`${import.meta.env.VITE_BASE_URL}/players/${id}`)
      .then((response) => {
        console.log(response.data.data.player);
        setPlayer(response.data.data.player);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <PuppyCard player={player} parent="details" />
    </>
  );
}

export default Details;
