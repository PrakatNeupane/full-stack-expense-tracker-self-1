import mongoose from "mongoose";

export const dbConnection = () => {
    try {
        const conString = 'mongodb://localhost:27017/expenses_tracker_1'
        const con = mongoose.connect(conString)
        con && console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}