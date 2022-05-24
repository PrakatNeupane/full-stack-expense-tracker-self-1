import express from 'express'
const app = express()
const PORT = process.env.PORT || 8000

// middleware setups
import cors from 'cors'
import morgan from 'morgan'
// to pass the json data coming from frontend
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
// if you are planning to pass form data urlencoded code needed

// database connection
import { dbConnection } from './src/config/db.js'
dbConnection()

// apis
import userRouter from './src/routers/userRouter.js'
app.use("/api/v1/users", userRouter)

// Handling request
app.get("*", (req, res) => {
    res.status(404).send('<h1>404 not found</h1>')
})
// * means if no request is handled, it will fall back to this 




app.listen(PORT, error => {
    error && console.log(error)
    console.log(`Server is running on port ${PORT}`)
})