#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const baseUrl = 'https://swapi.dev/api';
const filmUrl = `${baseUrl}/films/${movieId}/`;
const charactersUrl = `${baseUrl}/people/`;

// Get list of characters in correct order
request.get(`${baseUrl}/films/`, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const films = JSON.parse(body).results;
  const characters = films.find(f => f.url === filmUrl).characters;
  const characterNames = new Array(characters.length);

  // Get character names in correct order
  characters.forEach((charUrl, index) => {
    request.get(charUrl, (err, res, body) => {
      if (err) {
        console.error(err);
        return;
      }
      characterNames[index] = JSON.parse(body).name;

      // Print character names when all have been retrieved
      if (characterNames.filter(Boolean).length === characters.length) {
        characterNames.forEach(name => console.log(name));
      }
    });
  });
});
