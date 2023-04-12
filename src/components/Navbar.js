import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Navbar = () => {
  return (
        <AppBar position="static">
        <Container maxWidth="" >
        <Toolbar>
          <Typography variant="h1" component="div">
            Mortgage Calculator
          </Typography>
        </Toolbar>
        </Container>
      </AppBar>
  )
}

export default Navbar;