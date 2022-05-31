import ExpensesSchema from "./Expenses.schema.js";

// CRUD

//@expense should be an object
export const createExpense = (expense) => {
    return ExpensesSchema.create(expense)
}

//@filter must be an object, that should contain atleast the userId
export const getExpenses = (filter) => {
    return ExpensesSchema.find(filter)
}
//@filter must be an object, that should contain atleast the userId and the expensesID
export const deleteExpense = (filter) => {
    return ExpensesSchema.findOneAndDelete(filter)
}

