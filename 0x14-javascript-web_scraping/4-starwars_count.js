#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
const characterId = "18";

request(apiUrl, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const movies = JSON.parse(body).results;
    const count = movies.filter(movie => movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)).length;
    console.log(count);
  }
});
