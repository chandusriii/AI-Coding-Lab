import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import URLShortenerPage from './pages/URLShortenerPage';
import StatisticsPage from './pages/StatisticsPage';
import { Container } from '@mui/material';

function App() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  const addShortenedUrl = (url) => {
    setShortenedUrls([...shortenedUrls, url]);
  };

  return (
    <Router>
      <Navbar />
      <Container style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shortener" element={<URLShortenerPage addShortenedUrl={addShortenedUrl} shortenedUrls={shortenedUrls} />} />
          <Route path="/statistics" element={<StatisticsPage shortenedUrls={shortenedUrls} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;