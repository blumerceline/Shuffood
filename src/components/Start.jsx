import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Box, Stack, Typography, Card, CardContent, CardMedia} from '@mui/material'
import {SideBar, Videos} from './';
import { fetchFromAPI,fetchRecipeInfo } from '../utils/fetchFromAPI';

const Start = () => {
    const [recipes,setRecipes] = useState([]);
    const [isStarted, setStarted] = useState(false);
    const [randomNumber, setRandomNumber] = useState();

    const handleStart = () => {
        setStarted(true);
    }

    const handleClick = () => {
        var min = 1;
        var max = 900;
        var rand = Math.floor(min + Math.random() * (max - min));
        setRandomNumber(rand);
        console.log(randomNumber);
        fetchFromAPI(`?query=dinner&offset=${randomNumber}`).then((data) => setRecipes(data.results));
    }
    

    useEffect(() =>{
        fetchFromAPI(`?query=dinner&offset=381`).then((data) => setRecipes(data.results));
    },[])

    if(isStarted===false){
        return(
            <Stack direction="column" sx={{backgroundColor: '#f5efd7', position: 'relative',alignItems:"center", justifyContent:"center", 
            flexWrap:"wrap"}}>
                <Box sx={{height:{sx: 'auto'}, alignContent:'center', px: {sx:0,md:2}}}>
                    <Typography variant='h2' sx={{mt: '40px',mb: '50px'}}>Start Shuffling!</Typography>
                    <button onClick={handleStart} type="button" className='btn-style btn btn-dark'>Shuffle</button>
                </Box>
            </Stack>
        )
    }
    else{
        
        return(
            <Stack direction="column" sx={{backgroundColor: '#f5efd7', position: 'relative',alignItems:"center", justifyContent:"center", 
            flexWrap:"wrap"}}>
                <Box sx={{height:{sx: 'auto'}, px: {sx:0,md:2}}}>
                    <Card>
                        <CardMedia  image={recipes[0].image} alt={'recipepic'} sx={{width: 358, height: 180}}/>
                                <CardContent sx={{ alignContent:'center', backgroundColor:'#white', height:'106px'}}>
                                    <Typography sx={{alignContent:'center'}} variant="body2" fontWeight="bold" color='#black'>
                                        {recipes[0].title}
                                    </Typography>
                                    <button type="button" className='btn btn-link'><a href={recipes[0].sourceUrl}>Go to Recipe</a></button>
                                </CardContent>
                    </Card>
                    <button onClick={handleClick} type="button" className='btn-style btn btn-dark'>Shuffle</button>
                </Box>
            </Stack>
        )
    }
}


export default Start