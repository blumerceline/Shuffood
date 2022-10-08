import React from 'react';
import {useState, useEffect} from 'react';
import {Box, Stack, Typography, Card, CardContent, CardMedia} from '@mui/material'
import {SideBar, Videos} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import {Link} from 'react-router-dom';



const HomePage = () => (
    <Stack direction="column" sx={{backgroundColor: '#f5efd7', position: 'relative',alignItems:"center", justifyContent:"center", 
    flexWrap:"wrap"}}>
        <Box sx={{height:{sx: 'auto'}, px: {sx:0,md:2}}}>
            <Card>
                <CardMedia image={process.env.PUBLIC_URL + "/images/logo.JPG"} alt={'recipepic'} sx={{width: 358, height: 180}}/>
                        <CardContent sx={{ backgroundColor:'#white', height:'106px'}}>
                            <Typography variant="subtitle1" fontWeight="bold" color='#fff'>
                                Recipe Name
                            </Typography>
                        </CardContent>
            </Card>
            <button className='btn-style'>Shuffle!</button>
        </Box>
    </Stack>
)

export default HomePage