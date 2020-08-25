import React from 'react'

const EntryCard = (props) => {
    return (
        <div className="EntryCard">
            <h5>{ props.entryDate }</h5>
            {/* <p>{ props.assessmentResults } </p> */}
            <p>{ props.body }</p>

        </div>
    )
}

export default EntryCard