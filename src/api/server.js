import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    ContentType: 'application/json'
  }
})

function server () {
  return instance.apply(this, arguments)
    .then(response => {
      return response.data
    })
}

export default instance

export {
  server
}
