const express = require('express')
const ejs = require('ejs')
// const functions = require('firebase-functions')
const app = express()
const path = require('path')
const port = 3000

// set view engine (ejs)
app.set('view engine', 'ejs');

// handlers
const homeHandler = require('./controllers/index')
const registrationHandler = require('./controllers/registration')
const movieHandler = require('./controllers/movies')
const profileHandler = require('./controllers/profile')
const actorsListHandler = require('./controllers/actorList')
const actorsHandler = require('./controllers/actors')
const movieListHandler = require('./controllers/movieList')
const loginHandler = require('./controllers/login')

// serve static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', homeHandler.getHome)
app.get('/home', homeHandler.getHome)
app.get('/index', homeHandler.getHome)
app.get('/registration', registrationHandler.getRegistration)
app.get('/login', loginHandler.getLogin)
app.get('/movies', movieListHandler.getmovieList)
app.get('/movieList', movieListHandler.getmovieList)
app.get('/actors', actorsListHandler.getactorList)
app.get('/actorList', actorsListHandler.getactorList)

app.get('/profile/:username', profileHandler.getProfile);
app.get('/profile/:first-name', profileHandler.getProfile);


app.get('/movie/:movieID', movieHandler.getMovie);
app.get('/name/:nameID', actorsHandler.getNames);


app.get('*', (req, res) => res.status(404).send('404 ERROR: page not found'));

app.listen(port, function() { console.log("Server listening on port(" + port + ")")})

