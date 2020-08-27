import React from 'react'
//import ChakraModel from '../models/chakra'

import { Link } from 'react-router-dom'
//import ChakraCard from '../components/ChakraCard'

const chakraList = () => {
    return (
        <div>
        <Link to="/chakras/root">Root</Link> {' | '}
        <Link to="/chakras/sacral">Sacral</Link> {' | '}
        <Link to="/chakras/solar">Solar</Link> {' | '}
        <Link to="/chakras/heart">Heart</Link> {' | '}
        <Link to="/chakras/throat">Throat</Link> {' | '}
        <Link to="/chakras/thirdEye">Third Eye</Link> {' | '}
        <Link to="/chakras/crown">Crown</Link>
        </div>
    )
}

export default chakraList