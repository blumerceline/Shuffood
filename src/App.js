import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar, HomePage, Start}  from './components';

const App = () =>(
        <BrowserRouter>
            <Box sx={{backgroundColor:'#000'}}>
                <Navbar/> 
                <Routes>
                    <Route path="/" exact element={<Start/>}/>
                </Routes>
            </Box>
        </BrowserRouter>
)

export default App;