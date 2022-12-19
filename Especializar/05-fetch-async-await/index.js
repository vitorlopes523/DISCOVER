async function start() {
  const url = "https://api.github.com/users/vitorlopes523"
  const user = await fetch(url).then(r => r.json())
  const userRepos = await fetch(user.repos_url).then(r => r.json())
  console.log(userRepos)
}

start().catch(e => console.log(e))