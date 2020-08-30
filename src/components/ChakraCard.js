import React from 'react'


const ChakraCard = (props) => {
    const {name, sanskrit, location, color, mantra, blocked, overactive, balanced, meditation, crystal, essentialOil, natureTherapy, yoga} = props
    return (
        <div>
        <div className="chakra-card">
            <h3>Things to know about the { name } Chakra</h3>
            <h6>Sanskrit: { sanskrit }</h6>
            <h6>Located: { location }</h6>
            <h6>Color: { color }</h6>
            <h6>Mantra: { mantra }. </h6>
            <p>When your { name } Chakra is blocked you may feel or experience: { blocked }. When 
            this Chakra is overactive you may experience thoughts or feelings that are: { overactive}. When you are balanced in this area you may feel 
            more { balanced }.</p>
            <h6>Hollistic Therapies for the { name } Chakra :</h6>
            <h6>Crystals associated with balancing the { name } are { crystal }.</h6>
            <h6>Essential Oils to use for the { name } Chakra are { essentialOil }.</h6>
            <h6>Nature therapies to get you in touch with your { name } Chakra include: { natureTherapy }.</h6>
            <h6>Meditation : </h6><iframe title="meditation" width="420" height="315" src={ meditation }></iframe>
            <h6>Yoga :</h6> <iframe title="yoga" width="420" height="315"  src={ yoga }></iframe>
        </div>
        <footer>
        <p className="footer">This app is deisgned to promote mindful living and to empower
                individuals with the skills to balance their energy physically, mentally,
                and spiritually. Consult your physician before partaking in exercise and 
                for any illness or injury.
            </p>
        </footer>
        </div>
    )
}


export default ChakraCard