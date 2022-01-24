const express = require("express");
const app = express();
const hbs = require('hbs');
const platos = require("./Hpl/helpers");

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) => {
	res.render("main", platos);
});

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});

