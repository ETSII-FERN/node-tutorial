const express = require('express');
const app = express();

app.use(require('body-parser').urlencoded({
    extended: true
}));

app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/public/post.html');
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/post', (req, res) => {
  res.send('Hello world');
});

app.post('/postex', (req, res) => {

    console.log("Valor 1: " + req.body.valor.v1);
    console.log("Valor 2: " + req.body.valor.v2);

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
