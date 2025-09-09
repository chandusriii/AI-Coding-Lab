import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to the URL Shortener
      </Typography>
      <Typography variant="body1" paragraph>
        Shorten your long URLs and track their performance.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/shortener"
      >
        Get Started
      </Button>
    </Container>
  );
};

export default HomePage;