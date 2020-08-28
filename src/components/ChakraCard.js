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
            <h6>Meditation : </h6><iframe title="meditation" width="420" height="315" src={ meditation }></iframe>
            {/* // eslint-disable-next-line */}
            <h6>Yoga :</h6> <iframe title="yoga" width="420" height="315"  src={ yoga }></iframe>
            <h6>Crystals associated with balancing the { name } are { crystal }.</h6>
            <h6>Essential Oils to use for the { name } Chakra are { essentialOil }.</h6>
            <h6>Nature therapies to get you in touch with your { name } Chakra include
             { natureTherapy }.</h6>
        </div>
    )
}


export default ChakraCard