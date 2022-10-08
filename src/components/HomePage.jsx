import React from 'react';
import {useState, useEffect} from 'react';
import {Box, Stack, Typography, Card, CardContent, CardMedia} from '@mui/material'
import {SideBar, Videos} from './';
import { fetchFromAPI,fetchRecipeInfo } from '../utils/fetchFromAPI';

const HomePage = () => {

    const [recipes,setRecipes] = useState([]);

    useEffect(() => {
        fetchFromAPI(`?query=dinner`).then((data) => setRecipes(data.results));
    },[]);

    const handleClick = (e) => {
      fetchFromAPI(`?query=dinner`).then((data) => setRecipes(data.results));
    }

    return(
    <Stack direction="column" sx={{backgroundColor: '#f5efd7', position: 'relative',alignItems:"center", justifyContent:"center", 
    flexWrap:"wrap"}}>
        <Box sx={{height:{sx: 'auto'}, px: {sx:0,md:2}}}>
            <Card>
                <CardMedia image={recipes[0].image || process.env.PUBLIC_URL + "/images/logo.JPG"} alt={'recipepic'} sx={{width: 358, height: 180}}/>
                        <CardContent sx={{ backgroundColor:'#white', height:'106px'}}>
                            <Typography variant="subtitle1" fontWeight="bold" color='#black'>
                                {recipes[0].title || 'Hi'}
                            </Typography>
                        </CardContent>
            </Card>
            <button onClick={handleClick} className='btn-style'>Shuffle</button>
        </Box>
    </Stack>
    )
}

export default HomePage