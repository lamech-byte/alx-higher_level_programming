#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characters = JSON.parse(body).characters;
    characters.forEach((charUrl) => {
      request(charUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.log(charError);
        } else {
          console.log(JSON.parse(charBody).name);
        }
      });
    });
  }
});
