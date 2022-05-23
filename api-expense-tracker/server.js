import express from 'express'
const app = express()
const PORT = process.env.PORT || 8001

// Handling request
app.get("*", (req, res) => {
    res.status(404).send('<h1>404 not found</h1>')
})
// * means if no request is handled, it will fall back to this 





app.listen(PORT, error => {
    error && console.log(error)
    console.log(`Server is running on port ${PORT}`)
})