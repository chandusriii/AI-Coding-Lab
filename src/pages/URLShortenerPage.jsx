import React, { useState } from 'react';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const URLShortenerPage = ({ addShortenedUrl, shortenedUrls }) => {
  const [longUrl, setLongUrl] = useState('');

  const handleShorten = () => {
    if (longUrl) {
      const shortUrl = `http://short.url/${Math.random().toString(36).substr(2, 5)}`;
      addShortenedUrl({ longUrl, shortUrl, clicks: 0, date: new Date().toLocaleDateString() });
      setLongUrl('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <TextField
        label="Enter Long URL"
        variant="outlined"
        fullWidth
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleShorten}
        style={{ marginTop: '1rem' }}
      >
        Shorten
      </Button>
      <List style={{ marginTop: '2rem' }}>
        {shortenedUrls.map((url, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={url.shortUrl}
              secondary={`Original: ${url.longUrl}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default URLShortenerPage;