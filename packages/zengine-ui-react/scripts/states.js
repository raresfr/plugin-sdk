const fetch = require('node-fetch');
const fs = require('fs');

const CLIENT_ID = require('./client_id').CLIENT_ID;
const endpoint = `https://api.zenginehq.com/v1/states?client_id=${ CLIENT_ID }`;

(async () => {
  const response = await fetch(endpoint);
  const json = await response.json();
  if (json.status === 200) {
    fs.writeFileSync('./src/data/states.json', JSON.stringify(json.data));
  }
})();
