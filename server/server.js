const express = require('express');
const app = express();
const PORT = 5000;

const monsters = require('./modules/monsters.js');

app.use(express.static('server/public'));

app.get('/monsters', (req, res) => {
    res.send(monsters);
});

app.listen(PORT, () =>  {
console.log(`listening in port: ${PORT}`);

});