import React from 'react'
//import ChakraModel from '../models/chakra'

import { Link } from 'react-router-dom'
//import ChakraCard from '../components/ChakraCard'

const chakraList = () => {
    return (
        <div className="chakra-list">
        <Link to="/chakras/root">Root</Link> 
        <img src="rootImg.jpeg" alt=""/>
        <Link to="/chakras/sacral">Sacral</Link> 
        <img src="sacralImg.jpeg" alt=""/>
        <Link to="/chakras/solar">Solar</Link> 
        <img src="solarImg.jpeg" alt=""/>
        <Link to="/chakras/heart">Heart</Link> 
        <img src="heartImg.jpeg" alt=""/>
        <Link to="/chakras/throat">Throat</Link> 
        <img src="throatImg.jpeg" alt=""/>
        <Link to="/chakras/thirdEye">Third Eye</Link> 
        <img src="thirdEyeImg.jpeg" alt=""/>
        <Link to="/chakras/crown">Crown</Link>
        <img src="crownImg.jpeg" alt=""/>
        </div>
    )
}

export default chakraList