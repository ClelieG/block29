const API_URL =
  "https://fsa-puppy-bowl.herokuapp.com/api/2404-FTB-MT-WEB-PT/players";
//API URL 

async function fetchAllPlayers(){
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('ERROR:Try Again');
        }
        const playerData = await response.json();
        return playerData;
    }  catch (error) {
        console.error('ERROR', error);
        return null;
    }
}

export default fetchAllPlayers;

//FetchAllPlayers RETRIEVE player info