const axios = require('axios')

if (process.env.dev) {
  require('dotenv').config()
}

const githubAuthUrl = process.env.githubUrl + 'login/oauth/access_token'

const token = code => {
  return axios({
    method: 'POST',
    url: 'https://github.com/',
    'Content-type': 'application/x-www-form-urlencoded',
    data: {
      code: code,
      client_id: process.env.githubId,
      client_secret: process.env.githubSecret
    }
  })
    .then(response => response.data)
    .catch(response => response.response.status)
}

module.exports = { token }
