import React from 'react';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';

const Navbar = () => (
  <Stack direction="row" position="sticky" alignItems="center" p={3} sx={{position:'sticky',background:'#f5efd7', top:0, justifyContent:'center'}}>
    <Link to="/" style={{display:'flex', alignItems:'center'}}>
        <img src={process.env.PUBLIC_URL + "/images/logo.JPG"} alt="logo" height={250}/>
      </Link>
    
  </Stack>
)

export default Navbar
