import React from 'react'
//import ChakraModel from '../models/chakra'

import { Link } from 'react-router-dom'
//import ChakraCard from '../components/ChakraCard'

const chakraList = () => {
    return (
        <div>
        <Link to="root">Root</Link>
        <Link to="sacral">Sacral</Link>
        <Link to="solar">Solar</Link>
        <Link to="heart">Heart</Link>
        <Link to="throat">Throat</Link>
        <Link to="thirdEye">Third Eye</Link>
        <Link to="crown">Crown</Link>
        </div>
    )
}

export default chakraList