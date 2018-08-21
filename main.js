import request from 'superagent'

request.get('https://api.github.com/users/tcwhitak')
//   .auth('')
  .then(response => {
    displayInfo(response.body)
  })

function displayInfo (input) {
  console.log(input)
  console.log(input.name)
  console.log(input.html_url)
  console.log(input.email)
  console.log(input.bio)
  document.getElementById('topName').innerText = input.name
  document.getElementById('nameLine').innerText = input.name
  document.getElementById('emailLine').innerText = input.email
  document.getElementById('link').href = input.html_url
  document.getElementById('link').innerText = input.login
  document.getElementById('bioArea').innerText = input.bio
  document.getElementById('headShot').src = input.avatar_url
}

// example github api user output
// {
//     "login": "tcwhitak",
//     "id": 11022376,
//     "node_id": "MDQ6VXNlcjExMDIyMzc2",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/11022376?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/tcwhitak",
//     "html_url": "https://github.com/tcwhitak",
//     "followers_url": "https://api.github.com/users/tcwhitak/followers",
//     "following_url": "https://api.github.com/users/tcwhitak/following{/other_user}",
//     "gists_url": "https://api.github.com/users/tcwhitak/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/tcwhitak/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/tcwhitak/subscriptions",
//     "organizations_url": "https://api.github.com/users/tcwhitak/orgs",
//     "repos_url": "https://api.github.com/users/tcwhitak/repos",
//     "events_url": "https://api.github.com/users/tcwhitak/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/tcwhitak/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Chad Whitaker",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "public_repos": 0,
//     "public_gists": 0,
//     "followers": 0,
//     "following": 0,
//     "created_at": "2015-02-16T00:48:36Z",
//     "updated_at": "2018-06-30T14:56:51Z"
//   }
