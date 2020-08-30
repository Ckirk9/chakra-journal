import React from 'react'

const EntryCard = (props) => {
    // TODO DRY it up!!!
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


    return (
        props.entry ? <div className="EntryCard">
            <h8>{ formatDate(props.entry.entryDate) }</h8>
            <p>{ props.entry.body }</p>
            </div> : null
    )
}

export default EntryCard