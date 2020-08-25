const url = `http://localhost:5000/api/v1`

class ChakraModel {
  static all = () => {
    return fetch(`${url}/chakras`).then(res => res.json())
  }

  static show = (chakraId) => {
    return fetch(`${url}/chakras/${chakraId}`).then(res => res.json())
  }

  static create = (chakraData) => {
    return fetch(`${url}/chakras`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chakraData)
    })
      .then(res => res.json())
  }
}

export default chakraModel