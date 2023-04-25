#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.error(`Usage: node ${process.argv[1]} MOVIE_ID`);
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
  if (response.statusCode !== 200) {
    console.error(`Unexpected status code: ${response.statusCode}`);
    process.exit(1);
  }
  const movie = JSON.parse(body);
  movie.characters.forEach((characterUrl) => {
    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }
      if (response.statusCode !== 200) {
        console.error(`Unexpected status code: ${response.statusCode}`);
        process.exit(1);
      }
      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});
