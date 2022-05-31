import express from 'express'
import { createExpense } from '../models/expensesModel/Expenses.model.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the expenses API get'
    })
})
router.post('/', async (req, res) => {
    try {
        const { authorization } = req.headers
        console.log(req.headers.authorization)
        const result = await createExpense({ ...req.body, userId: authorization })

        result?._id ?
            res.json({
                status: "success",
                message: 'The expense was created successfully'
            })
            :
            res.json({
                status: "error",
                message: 'Expense could not be created '
            })
    } catch (error) {
        console.log(error)
        res.json({
            status: 'error',
            message: error.message
        })
    }

})
router.delete('/', (req, res) => {
    res.json({
        message: 'Welcome to the expenses API delete'
    })
})

export default router