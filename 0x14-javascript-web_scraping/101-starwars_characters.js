#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieUrl = `https://swapi.dev/api/films/${movieId}/`;

// First request to get movie details
request(movieUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const movieData = JSON.parse(body);
  const charactersUrls = movieData.characters;

  // Second request to get character details
  charactersUrls.forEach(function (url) {
    request(url, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  });
});
