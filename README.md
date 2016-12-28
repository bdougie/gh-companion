# gh-companion

Take compoanion tool for management your interests in GitHub

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bdougie/gh-companion)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and inpsired from the [octobox](https://github.com/octobox/octobox).

## Setup

The default Github-based authenticator integrates with Netlify's [Authentication Provider feature](https://www.netlify.com/docs/authentication-providers) and the repository
backend integrates directly with Github's API.

To get everything hooked up, setup continuous deployment from Github to Netlify
and then follow [the documentation](https://www.netlify.com/docs/authentication-providers)
to setup Github as an authentication provider.

```sh
npm install // or yarn
GITHUB_TOKEN="your GitHub auth token" npm start
```
