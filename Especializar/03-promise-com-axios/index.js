import axios from "axios";

// axios
// .get('https://api.github.com/users/vitorlopes523')
// .then(response => axios.get(response.data.repos_url))
// .then(repos => console.log(repos.data))
// .catch( error => console.log(error))

Promise.all([
  axios.get('https://api.github.com/users/vitorlopes523'),
  axios.get('https://api.github.com/users/vitorlopes523/repos')
])
.then( responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch( err => console.log(err.message))