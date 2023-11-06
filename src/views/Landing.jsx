import React from "react";
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
  } from '@chakra-ui/react'
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import PrivateAccess from "../components/privateAccess";

const Landing = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <PrivateAccess/>
        </div>
    )
};

export default Landing;
