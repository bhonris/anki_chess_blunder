const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');


// TODO: get the username for the frontend to pass here
// const username = 'juanlu_herrero';
// const ids = getgameIDs(username);

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());

 app.post("/test", async (req, res) => {
  console.log("In post req: " + req.body.username)
  const games = await getgameIDs(req.body.username)
  res.json({username: req.body.username, games})
})

app.post("/add", (req, res) => {
  console.log(req.body)
  res.json({sum: req.body.num_one + req.body.num_two});
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
        const white = parsedGame.players.white.user.id
        const black = parsedGame.players.black.user.id
        var color = ""
        lowerCaseUsername = username.toLowerCase()
        if (lowerCaseUsername===white) color = "white"
        if (lowerCaseUsername===black) color = "black"
        ids.push({id: parsedGame.id, moveNum: 3, color});
      }
    });
    console.log(ids);
    return ids;
  }).catch(function (error) {
    console.log(error);
  });
}