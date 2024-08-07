import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PuppyCard from "../components/PuppyCard/PuppyCard";
import axios from "axios";
import PuppyCardList from "../components/PuppyCardList/PuppyCardList";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Home({ token, setToken }) {
  const [players, setPlayers] = useState([]);
  const [playersToShow, setPlayersToShow] = useState([]);

  useEffect(() => {
    axios(`${BASE_URL}/players`)
      .then((data) => {
        setPlayers(data.data.data.players);
        setPlayersToShow(data.data.data.players);
        console.log(data.data.data.players);
      })
      .catch((err) => console.log(err));
  }, []);

  const playerSearch = (e) => {
    console.log(e.target.value);
    const searchResults = players.filter((player) =>
      player.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPlayersToShow(searchResults);
    console.log(searchResults);
    console.log(playersToShow);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <>
          <Link to="/addPlayer">Add a Player</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <h1>Puppy Bowl</h1>
      <label>
        Search for a puppy by name:
        <input type="text" onChange={playerSearch} />
      </label>
      <PuppyCardList players={playersToShow} />
    </div>
  );
}

export default Home;
