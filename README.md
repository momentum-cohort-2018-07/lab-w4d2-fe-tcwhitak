# GitHub Bio Site

## Directions

In today's project, you'll be asked to not only write code to make live Ajax requests, but also write some HTML and CSS to bring a mockup to life.

- Start with the mockup below and using the GitHub API, pull in the info to build yourself a virtual business card.
- Everything _but_ the headers ("The Basics", "The Story") and the bio will be pulled in via GitHub's API. If it's not there on your GitHub profile, then add it.
- Make sure to pull your avatar in with GitHub and make it a circle.

![github-portfolio.png](github-portfolio.png)

## Hints

Since there are no starter files provided, you'll need to create your own HTML, CSS and JavaScript file and link them together properly. Before you start writing any JavaScript, we suggest you spend a few moments reading through the GitHub API docs listed below to get familiar with how you can obtain the data.

Once you have a decent grasp on that, start setting up your Ajax calls and setting up your callback functions to work with the data you retrieve.

## Bonus steps

Read up on the [hCard microformat](http://microformats.org/wiki/h-card) and make sure your page conforms to the hCard standard.

## Resources

- [Full Screen Mockup](github-portfolio.png)
- [GitHub User API](https://api.github.com/users/username) - change username

{
  "login": "tcwhitak",
  "id": 11022376,
  "node_id": "MDQ6VXNlcjExMDIyMzc2",
  "avatar_url": "https://avatars1.githubusercontent.com/u/11022376?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tcwhitak",
  "html_url": "https://github.com/tcwhitak",
  "followers_url": "https://api.github.com/users/tcwhitak/followers",
  "following_url": "https://api.github.com/users/tcwhitak/following{/other_user}",
  "gists_url": "https://api.github.com/users/tcwhitak/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tcwhitak/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tcwhitak/subscriptions",
  "organizations_url": "https://api.github.com/users/tcwhitak/orgs",
  "repos_url": "https://api.github.com/users/tcwhitak/repos",
  "events_url": "https://api.github.com/users/tcwhitak/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tcwhitak/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Chad Whitaker",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2015-02-16T00:48:36Z",
  "updated_at": "2018-06-30T14:56:51Z"
}

- [GitHub API Docs](https://developer.github.com/)
- [Sawtooth banners with CSS](https://medium.com/coding-design/saw-tooth-banners-with-css-95c31e91c196)
