import { getUser } from "../models/userModel/User.model.js"

export const useAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        // console.log(req.headers)
        if (authorization) {
            // check in db 
            const user = await getUser(authorization)
            console.log(user)
            user?._id ? next() : res.status(403).json({
                status: "error",
                message: "You are not authorized to access this resources"
            })
        }
        console.log(authorization)
        // code
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "You are not authorized to access this resources"
        })
    }

}