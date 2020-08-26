import React from 'react'
import { Link } from 'react-router-dom'

const EntryList = (props) =>  {
    let entries = props.entries ? props.entries.map((entry, index) => {
        return (
            <Link to={`/entries/${entry._id}`} key={index}>
                <h5>{ entry.entryDate }</h5>
            </Link>
        )
    }) : 'No entries'
    
return (
    <div>
        <h1>Your Previous Entries</h1>
        { entries }
    </div>
)
}

export default EntryList