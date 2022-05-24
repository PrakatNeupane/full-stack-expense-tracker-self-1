import express, { json } from "express";
import { insertUser } from "../models/userModel/User.model.js";
const router = express.Router()

router.all('/', (req, res, next) => {
    console.log("user router got hit")
    next()
})

// get user
router.get("/", (req, res) => {
    res.send("login user")
})

// register user
router.post("/", async (req, res) => {

    try {
        console.log(req.body)
        const result = await insertUser(req.body)
        result?._id ?
            res.json({
                status: "success",
                mesasge: "User registration successful",
            })
            :
            res.json({
                status: "error",
                mesasge: "User registration failed, please try again later"
            })

    } catch (error) {
        let message = error.mesasge
        if (error.message.includes("duplicate key error collection")) {
            message = "User already exists using this email"
        }
        res.json({
            status: "error",
            message,
        })
    }
})

// login user
router.post('/login', (req, res) => {
    console.log(req.body)
    res.send("login user")
})


export default router;