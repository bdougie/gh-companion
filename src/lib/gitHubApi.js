import axios from "axios";

// Get s new toke in Webpack
const auth = {Authorization: process.env.githubToken}

function userQuery() {
  return `
    {
      viewer {
        avatarURL
        login
      }
    }
  `
}

function repoQuery(name, repo) {
  return `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
          name
          url
          owner {
            login
            repositories {
              totalCount
            }
          }
          description
          forks {
            totalCount
          }
          issues {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  `
}

export function fetchRepositoryData(name, repo) {
  return axios.post("https://api.github.com/graphql", {
    query: repoQuery(name, repo)
  }, {headers: auth})
}

export function fetchUserData() {
  return axios.post("https://api.github.com/graphql", {
    query: userQuery()
  }, {headers: auth})
}

export function fetchUserNotifications() {
  return axios.get("https://api.github.com/notifications", {headers: auth})
}
