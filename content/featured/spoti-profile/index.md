---
date: "1"
title: "Spoti Profile"
technologies:
  - React
  - Node.js
  - Express.js
  - React router
  - Axios
  - Heroku
  - Spotify web API
external: "https://spoti-profile.herokuapp.com"
github: "https://github.com/vincentportier/spotify-api-project"
image: "spotiprofile.png"
---

Spoti Profile is a React application with a Node/Express.js backend that displays your Spotify information. The Express.js backend is used to authorize the application with Spotify and to request permissions from the user for access to their Spotify data. Once the user has granted permission, the Express.js server fetches a token from Spotify and passes it to the React client that uses it to make Axios requests to Spotify. The client also uses React router to navigate and to set url params that are used to fetch tracks and artists data. The app is deployed on Heroku (please allow 15 seconds for the app to open on first load since I'm using Heroku's free tier).
