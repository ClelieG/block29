import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import AllPlayers from './components/AllPlayers.jsx';
import NavBar from './components/NavBar.jsx';
import NewPlayerForm from './components/NewPlayerForm.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';


function App() {
  return (
    <BrowserRouter>
     <div>
        <NavBar>
          <link to={'/'}>
            <button>See Players</button>
          </link>
          <Link to={'/new-player'}>
            <button>New Player</button>
          </Link>
          </NavBar> 
        <Routes>
            <Route path='/' element={<AllPlayers/>} />
            <Route path='/new-player' element={<NewPlayerForm />} />
            <Route path='/players/:id' element={< SinglePlayer />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App; 
