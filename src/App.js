import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RightBanner from './RightBanner';
import MessagePage from './MessagePage';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleMusicToggle = () => {
    const audioElement = document.getElementById('backgroundMusic');
    if (audioElement) {
      if (isMusicPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(error => console.error('Error playing audio:', error));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage handleMusicToggle={handleMusicToggle} isMusicPlaying={isMusicPlaying} />} />
        <Route path="/message" element={<MessagePage />} />
      </Routes>
    </Router>
  );
}

function HomePage({ handleMusicToggle, isMusicPlaying }) {
  return (
    <div className="App">
      <header>
        <h1>Happy Birthday, Tinkuluuu!</h1>
      </header>
      <main className="main-content">
        <div className="centered-content">
          <section className="message">
            <p>Love and Love Always!</p>
            <Link to="/message">
              <button className="click-me-button">Surprise</button>
            </Link>
          </section>
          <div className="banner-wrapper">
            <div className="left-banners">
              <img src="/images/p1.jpeg" alt="Static 1" className="static-image" />
              <img src="/images/p2.jpeg" alt="Static 2" className="static-image" />
            </div>
            <RightBanner />
            <div className="right-banners">
              <img src="/images/p3.jpeg" alt="Static 3" className="static-image" />
              <img src="/images/p4.jpeg" alt="Static 4" className="static-image" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>With love from Chintu 🐼</p>
      </footer>
      <audio id="backgroundMusic" src="/song.mp3" loop></audio>
    </div>
  );
}

export default App;
