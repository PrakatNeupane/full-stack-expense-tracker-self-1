import express, { json } from "express";
import { findUser, insertUser } from "../models/userModel/User.model.js";
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
        console.log(result._id)
        result?._id ?
            res.json({
                status: "success",
                message: "User registration successful. You can now login.",
            })
            :
            res.json({
                status: "error",
                message: "User registration failed, please try again later"
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
router.post('/login', async (req, res) => {

    try {

        const user = await findUser(req.body)

        user?._id ?
            res.json({
                status: "success",
                user
            }) :
            res.json({
                status: "error",
                message: "Invalid login credentials",
            })
    } catch (error) {
        console.log(error)
        res.json({
            status: "error",
            message: error.message,
        })
    }
})


export default router;