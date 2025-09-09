import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          URL Shortener
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/shortener">
          Shortener
        </Button>
        <Button color="inherit" component={Link} to="/statistics">
          Statistics
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;