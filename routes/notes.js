import express from 'express'

// If you have routes that follow a pattern, you may want to use express.Router()
const notesRouter = express.Router()

// res supports send, status, json, download, and render
notesRouter.get('/', (req, res) => {
    res.send('Notes')
})

notesRouter.post('/newNote', (req, res) => {
    res.send('Note created')
})

export default notesRouter