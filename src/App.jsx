import { useState } from 'react';
import Dashboard from './Dashboard';
import Footer from './Footer';
import './index.css';
import TopBar from './TopBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LibraryPopup from './LibraryPopup';

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
        </Routes>
      </Router>
    </div>
  )
}

export default App
