#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const movieUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(movieUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const charactersUrls = JSON.parse(body).characters;
  const charactersNames = [];

  let completedRequests = 0;

  for (const url of charactersUrls) {
    request(url, function (error, response, body) {
      if (error) {
        console.error(error);
        return;
      }

      const characterName = JSON.parse(body).name;
      charactersNames.push(characterName);

      completedRequests++;

      if (completedRequests === charactersUrls.length) {
        for (const name of charactersNames) {
          console.log(name);
        }
      }
    });
  }
});
