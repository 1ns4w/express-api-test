import 'dotenv/config'
import express from 'express'
import notesRouter from './routes/notes.js'

// Create express server 
const app = express()

// Server configuration
app.use(express.json()) // parse json information into req.body

// Extra server configuration
// app.set('view engine', 'ejs') // enables dynamic pages rendering using send.render(page, payload) from views folder
// app.use(express.static('public')) // enables static pages from public folder but makes routing more complex due to file system
// app.use(express.urlencoded({ extended:true }))

// Route enables defining multiple actions for a route depending on request methods
app.route('/')
    .get((req, res) => {
        res.send('Login')
    })
    .post((req, res) => {
        res.send({ access_token:true })
    }) 

// Middleware for token validation
const tokenValidation = (req, res, next) => !req.body.access_token ? res.status(501).send('Unauthorised!') : next()
app.use(tokenValidation)

// Mount the router on the app
app.use('/notes', notesRouter)

// Extra feats
// - route.param is a middleware that triggers an action when a param is present in a url
// - query params (?var=val) can be parsed using req.query.query_param

// Start server
app.listen(process.env.PORT || 3000)