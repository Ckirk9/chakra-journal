const url = `http://localhost:5000/api/v1`

class EntryModel {
    static all = (userID) => {
        return fetch(`${url}/entries/userEntries/${userID}`).then(res => res.json())
    }

    static show = (entryId) => {
        return fetch(`${url}/entries/${entryId}`).then(res => res.json())
    }

    static create = (entryData) => {
        return fetch(`${url}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryData)
        })
            .then(res => res.json())
    }
}

export default EntryModel