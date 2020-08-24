const REACT_APP_API_URL = "http://localhost:5000/api/v1"

export default class UserModel {
    static async create(data) {
        const res = await fetch(`${REACT_APP_API_URL}/auth/signUp`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        return await res.json()
    }

    static async login(credentials) {
        const res = await fetch(`${REACT_APP_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(credentials)
        })
        return await res.json()
    }

    static async logout() {
        const res = await fetch(`${REACT_APP_API_URL}/auth/logout`, {
            method: "DELETE",
            credentials: "include",
        })
        return await res.json
    }
}