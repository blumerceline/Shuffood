import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar, HomePage}  from './components';

const App = () =>(
        <BrowserRouter>
            <Box sx={{backgroundColor:'#000'}}>
                <Navbar/> 
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                </Routes>
            </Box>
        </BrowserRouter>
)

export default App;