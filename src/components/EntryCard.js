import React from 'react'
import { Link } from 'react-router-dom'

const EntryCard = (props) => {
    return (
        <div className="EntryCard">
            <h5>{ props.entry.entryDate }</h5>
            <p>{ props.entry.body }</p>
            <Link to={`/editEntry/${props.entry._id}`}>Edit</Link>
        </div>
    )
}

export default EntryCard