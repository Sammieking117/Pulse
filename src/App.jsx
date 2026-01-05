import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Footer from './pages/Footer';
import './index.css';
import TopBar from './pages/TopBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LibraryPopup from './components/LibraryPopup';
import ArtistDetails from './pages/ArtistDetails';
import SongDetails from './pages/SongDetails';
import AlbumDetails from './pages/AlbumDetails';

function App() {
  const [showLibraryPopup, setShowLibraryPopup] = useState(false);

  return (
    <div>
      <Router>
        <TopBar />
        <Footer onLibraryClick={() =>
          setShowLibraryPopup(true)} />

          {showLibraryPopup && (<LibraryPopup onClose={() => 
            setShowLibraryPopup(false)} />
            )}
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route path='/artist/:id' element={<ArtistDetails />} />
          <Route path='/song/:id' element={<SongDetails />} />
          <Route path='/album/:id' element={<AlbumDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
