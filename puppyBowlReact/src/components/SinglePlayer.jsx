import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function SinglePlayer() {
    const { id } = useParams();
    const [player, setPlayer] = useState(null);
    const navigate = useNavigate();
}

const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this player?')) {
      const baseUrl =
        'https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT'; 
      const endpoint = `/players/${id}`;

      try {
        const response = await fetch(`${baseUrl}${endpoint}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`API call failed ${response.status}`);
        }

        console.log('Player deleted successfully');
        navigate('/');
      } catch (error) {
        console.error('Error deleting player:', error);

      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayerById(id);
        setPlayer(data);
      } catch (error) {
        console.error('Error fetching player:', error);
    }
    };

    fetchData();
 { [id]};

  return (
    <div>
      <h2>Player Details</h2>
      {player ? (
        <>
          {}
          <button onClick={handleDelete}>Delete Player</button>
        </>
      ) : (
        <p>Loading</p>
      )}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
}

export default SinglePlayer