import axios from 'axios'
const rootUrl = 'http://localhost:8000/api/v1'
const userApi = rootUrl + '/users'
const loginApi = rootUrl + '/users/login'


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
export const postLogin = formData => {
    try {
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