const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

let myName = 'Lane';

app.get('/', function (req, res) {
    // res.send('<h1>Hello World, this is Lane in November!')
    res.send(`<h3> Hi, ${myName} !!!!</h3>`)
    // res.send(myName)
})

app.get('/show', (req, res) => {

    res.sendFile('index.html', { root: __dirname });
})

app.get('/ejs', (req, res) => {

    // ejs stuff here
    res.render('index', { myName: myName }); // left var is ejs, right is node land

})

app.get('/name', (req, res) => {

    console.log("in get to slash name:", req.query.ejsFormName);

})

app.listen(PORT)