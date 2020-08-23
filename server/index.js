const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');


// TODO: get the username for the frontend to pass here
const username = 'juanlu_herrero';
const ids = getgameIDs(username);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.get("/test", (req, res) => {
  res.send('Hello World A');
})

app.listen(3003, () => {
  console.log((new Date).toString())
  console.log("Server is up and listening on 3003")
})

async function getgameIDs(username){
  return await axios.get(
    '/api/games/user/' + username, {
      baseURL: 'https://lichess.org/',
      headers: {
        'Accept': 'application/x-ndjson'
      },
      params: {
        max: 10,
        evals: true,
        analysed: true
      }
    }).then(resp => {
    const chessGames = resp.data.split("\n");
    let ids = [];
    chessGames.forEach(elt => {
      if (elt) { // checking if the string is empty.
        const parsedGame = JSON.parse(elt);
        ids.push(parsedGame.id);
      }
    });
    console.log(ids);
    return ids;
  }).catch(function (error) {
    console.log(error);
  });
}