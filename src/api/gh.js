import axios from "axios"

export default axios.create({
  baseURL: "https://api.github.com",
})

// let headers = new Headers()
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
// headers.append('Access-Control-Allow-Credentials', 'true');
