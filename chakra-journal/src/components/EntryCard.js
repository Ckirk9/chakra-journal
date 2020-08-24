import React from 'react'

const EntryCard = (props) => {
    return (
        <div className="EntryCard">
            <h3>{ props.entryDate }</h3>
            <p>{ props.assessmentResults } </p>
            <p>{ props.body }</p>

        </div>
    )
}

export default EntryCard