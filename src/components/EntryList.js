import React from 'react'
import { Link } from 'react-router-dom'

const EntryList = (props) =>  {
   // TODO DRYYYYYYY
    const formatDate = (rawDate) => {
        if (rawDate) {
            rawDate = new Date(rawDate)
            const year = rawDate.getFullYear()
            const month = rawDate.getMonth() + 1
            let monthString = month.toString()
            if (month < 10) {
                monthString = '0' + month.toString()
            }
            const day = rawDate.getDate() + 1
            let dayString = day.toString()
            if (day < 10) {
                dayString = '0' + day.toString()
            }
            return `${year}-${monthString}-${dayString}`
        } else {
            return rawDate
        }
    }

    let entries = props.entries ? props.entries.map((entry, index) => {
        return (
            <li> <Link to={`/entries/${entry._id}`} key={index}>
                {formatDate(entry.entryDate)}
            </Link></li>
        )
    }) : 'No entries'
    
return (
    <div>
        <h7>Previous Entries</h7>
        <ul>{ entries }</ul>
    </div>
)
}

export default EntryList