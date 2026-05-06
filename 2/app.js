const express = require('express')
const film = require('./Film.json')

const app = express()
app.disable('x-powered-by')

app.get("/", (req, res) => {
    res.send('<h1>Peliculas sitio web</h1>')
})

app.get('/movies', (req, res) => {
    const { genre } = req.query
    if (genre) {
      const filteredMovies = film.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
      return res.json(filteredMovies)
    }

    res.json(film)
})

app.get('/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = film.find( film => film.id === id)
    if (movie) return res.json(movie)

    res.status(404).json({ message: 'no se encontro la pelicula' })
})

const PORT = process.env.PORT ?? 1500

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})