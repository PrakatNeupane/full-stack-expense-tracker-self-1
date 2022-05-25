import axios from 'axios'
const rootUrl = 'http://localhost:8000/api/v1'
const userApi = rootUrl + '/users'

export const postRegister = async formData => {
    try {
        // const { data } = await axios.post(userApi, formData)
        // console.log(data)
        // return data
        return await axios.post(userApi, formData)
    } catch (error) {
        return {
            data: {
                status: 'error',
                message: error.message
            }
        }
    }
}