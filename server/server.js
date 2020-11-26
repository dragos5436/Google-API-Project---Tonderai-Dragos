const express = require('express');
const cors = require('cors');

// Searches Resource
const searchResults = [
    {search: "cats", url:"https://bit.ly/3eOEoCW"},
    {search: "dogs", url:"https://bit.ly/3n9mMo7"}, 
    {search: "cars", url:"https://bit.ly/3piKCzx"},
    {search: "planes", url: "https://bit.ly/3pgubnC"},
    {search: "oranges", url: "https://bit.ly/3eJnDc0"},
    {search: "apples", url: "https://bit.ly/32vOiUW"},
    {search: "movies", url: "https://bit.ly/2Ir3H1Q"},
    {search: "radios", url: "https://bit.ly/3kqx5Tb"},
    {search: "shoes", url: "https://bit.ly/36trYwy"},
    {search: "hats", url: "https://bit.ly/2UcrWn1"}
]

const app = express();
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello user, welcome to Google!')
})

app.get('/searches', (req, res) => {
    res.send(searchResults)
})

app.get('/searches/random', (req, res) => {
    res.send(searchResults[Math.floor(Math.random() * searchResults.length)])
})

app.get('/searches/:search', (req, res) => {
    try {
        const searchName = req.params.search  
        const chosenSearch = searchResults.find(s => s.search === searchName)
        if(!chosenSearch){
            res.send('Search unavailable, please try something else')
            throw new Error('Search unavailable, please try something else')
        } else {
            res.send(chosenSearch)
        }
    } catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
})

module.exports = app