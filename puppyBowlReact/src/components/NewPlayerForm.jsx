import React, { useState } from 'react';

function NewPlayerForm() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [team, setTeam] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const newPlayer = {
        name,
        position,
        team,
      };

      const baseUrl =
        'https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT'; 
      const endpoint = '/players';

      const response = await fetch(`${baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlayer),
      });

      if (!response.ok) {
        throw new Error(`API call failed ${response.status}`);
      }

      const data = await response.json();
      console.log('Player created successfully:', data);

      // Handle successful creation (e.g., clear form, redirect)
      setName('');
      setPosition('');
      setTeam(''); 
    } catch (error) {
      console.error('Error creating player:', error);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Player!</h2>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='position'>Position:</label>
      <input
        type='text'
        id='position'
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <label htmlFor='team'>Team:</label>
      <input
        type='text'
        id='team'
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      {}
      <button type='submit'>Create Player</button>
    </form>
  );
}

export default NewPlayerForm;