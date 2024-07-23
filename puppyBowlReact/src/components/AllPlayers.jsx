import React, { useState, useEffect } from "react";
import fetchAllPlayers from "../API/ajaxHelpers";


function allPlayers(){
const [players, setPlayers] = useState([])
useEffect(()=>{
    async function fetchData(){
        const fetchedPlayers = await fetchPlayers();
        if (fetchedPlayers) {
            setPlayers(fetchedPlayers);
        } else {
            console.log('Fetch players failed');
        }
    }

},[])
}

fetchData();
{ [];

  return (
    <div>
      {isLoading && <p>Loading players...</p>}
      {error && <p>Error fetching: {error.message}</p>}
      {players.length > 0 && (
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              <h2>{player.name}</h2>
              <p>Breed: {player.breed}</p>
              <p>Status: {player.status}</p>
              <img src={player.imageUrl} alt={player.name} />
            </li>
          ))}
        </ul>
      )}
      {players.length === 0 && !isLoading && !error && <p>No players found.</p>}
    </div>
  );
}
export default AllPlayers;