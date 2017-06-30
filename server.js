'use strict';

const express = require('express')
const app = express();
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.listen(PORT, function (){
  console.log('PORT is listening on:', PORT);
});
