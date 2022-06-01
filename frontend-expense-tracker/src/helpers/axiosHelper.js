import axios from 'axios'
const rootUrl = 'http://localhost:8000/api/v1'
const userApi = rootUrl + '/users'
const loginApi = rootUrl + '/users/login'
const expAPI = rootUrl + '/expenses'


export const postRegister = formData => {
    try {
        // const { data } = await axios.post(userApi, formData)
        // console.log(data)
        // return data
        return axios.post(userApi, formData)
    } catch (error) {
        return {
            data: {
                status: 'error',
                message: error.message
            }
        }
    }
}
export const postLogin = async formData => {
    try {
        // console.log(await axios.post(loginApi, formData))
        return axios.post(loginApi, formData)
    } catch (error) {
        const data = {
            status: 'error',
            message: error.message
        }
        return {
            data,
        }
    }
}

export const postExpense = async formDt => {
    try {
        const user = JSON.parse(sessionStorage.getItem("user"))
        const { data } = await axios.post(expAPI, formDt, {
            headers: {
                Authorization: user._id,
            }
        })
        return data;
    } catch (error) {
        console.log(error)
        return {
            data: {
                status: 'error',
                message: error.message
            }
        }
    }
}