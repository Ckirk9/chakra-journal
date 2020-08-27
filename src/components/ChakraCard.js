import React from 'react'


const ChakraCard = (props) => {
    const {name, sanskrit, location, color, mantra, blocked, overactive, balanced, meditation, crystal, essentialOil, natureTherapy, yoga} = props
    console.log('Med: ', meditation);
    return (
        <div className="ChakraCard">
            <h3>Things to know about the { name } Chakra</h3>
            <h5>Sanskrit: { sanskrit }</h5>
            <h5>Physically Located: { location }</h5>
            <h5>Color: { color }</h5>
            <h5>The mantra for the { name } is: { mantra }. </h5>
            <p>When your { name } is blocked you may experience: { blocked }. When 
            this Chakra is overactive you may experience thoughts or feelings that are: 
            { overactive}. When you are balanced in this area you may feel 
            more { balanced }.</p>
            <h5>Hollistic Therapies for the { name } Chakra :</h5>
            <h6>Meditation : <a href={ meditation } target="_blank" rel="noopener noreferrer">Link to a guided meditation</a></h6>
            <h6>Yoga : <a href={ yoga } target="_blank" rel="noopener noreferrer">Link to a guided yoga sequence</a></h6>
            <h6>Crystals associated with balancing the { name } are { crystal }.</h6>
            <h6>Essential Oils to use for the { name } Chakra are { essentialOil }.</h6>
            <h6>Nature therapies to get you in touch with your { name } Chakra include
             { natureTherapy }.</h6>
        </div>
    )
}


export default ChakraCard