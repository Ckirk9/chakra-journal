const url = `http://localhost:5000/api/v1`

class EntryModel {
    static all = (userID) => {
        return fetch(`${url}/entries/userEntries/${userID}`).then(res => res.json())
    }

    static show = (entryId) => {
        return fetch(`${url}/entries/${entryId}`).then(res => res.json())
    }

    static create = (entryData) => {
        console.log('Entry Data NEW: ', entryData);
        return fetch(`${url}/entries`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryData)
        })
            .then(res => res.json())
    }

    static edit = (entry) => {
        return fetch(`${url}/entries/${entry.entry._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry.entry)
        })
        .then(res => res.json())
    }

    static destroy = (id) => {
        return fetch(`${url}/entries/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
    }
}

export default EntryModel